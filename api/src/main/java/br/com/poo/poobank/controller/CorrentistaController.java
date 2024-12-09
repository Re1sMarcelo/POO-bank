package br.com.poo.poobank.controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.poo.poobank.domain.Correntista;
import br.com.poo.poobank.domain.Usuario;
import br.com.poo.poobank.repository.CorrentistaRepository;

@RestController
@RequestMapping("correntista")
@CrossOrigin(origins = "http://localhost:4200")
public class CorrentistaController {
   
    @Autowired
    private CorrentistaRepository repository;

    @GetMapping
    public ResponseEntity<List<Correntista>> listar() {
        List<Correntista> list = repository.findAll();
        return ResponseEntity.ok().body(list);
    }

    @PostMapping
    public ResponseEntity<Correntista> save(@RequestBody Correntista correntista) {
        Correntista novoCorrentista = repository.save(correntista);
        return ResponseEntity.status(HttpStatus.CREATED).body(novoCorrentista);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Correntista loginRequest) { 
    Optional<Correntista> correntista = repository.findByCpfAndSenha(
        loginRequest.getCpf(),
        loginRequest.getSenha()
    );

    if (correntista.isPresent()) {
        return ResponseEntity.ok(Map.of("sucesso", true));
    }

    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("sucesso", false));
}

}
