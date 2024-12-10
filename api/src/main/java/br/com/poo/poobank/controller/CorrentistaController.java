package br.com.poo.poobank.controller;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.poo.poobank.domain.Correntista;
import br.com.poo.poobank.repository.CorrentistaRepository;

@RestController
@RequestMapping("correntista")
@CrossOrigin(origins = "http://localhost:4200")
public class CorrentistaController {

    @Autowired
    private CorrentistaRepository correntistaRepository;

    @GetMapping
    public ResponseEntity<List<Correntista>> listar() {
        List<Correntista> list = correntistaRepository.findAll();
        return ResponseEntity.ok().body(list);
    }

    @PostMapping
    public ResponseEntity<Correntista> save(@RequestBody Correntista correntista) {
        Correntista novoCorrentista = correntistaRepository.save(correntista);
        return ResponseEntity.status(HttpStatus.CREATED).body(novoCorrentista);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> loginRequest) {
        String cpf = loginRequest.get("cpf");
        String senha = loginRequest.get("senha");

        Optional<Correntista> correntistaOpt = correntistaRepository.findByCpfAndSenha(cpf, senha);
        if (correntistaOpt.isPresent()) {
            Correntista correntista = correntistaOpt.get();
            return ResponseEntity.ok(correntista); // Inclui nome, saldo e outros atributos
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("CPF ou senha inválidos");
        }
    }

    @PutMapping("/saque/{id}")
public ResponseEntity<Correntista> realizarSaque(@PathVariable Integer id, @RequestBody Map<String, BigDecimal> saqueData) {
    try {
        BigDecimal valorSaque = saqueData.get("valorSaque");

        Optional<Correntista> optionalCorrentista = correntistaRepository.findById(id);
        if (optionalCorrentista.isPresent()) {
            Correntista correntista = optionalCorrentista.get();

            // Verificar saldo suficiente
            if (correntista.getSaldo().compareTo(valorSaque) >= 0) {
                correntista.setSaldo(correntista.getSaldo().subtract(valorSaque)); // Atualiza o saldo
                correntistaRepository.save(correntista);
                return ResponseEntity.ok(correntista);
            } else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
            }
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    } catch (Exception e) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
    }
}
}
