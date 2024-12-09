package br.com.poo.poobank.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.poo.poobank.domain.Transacao;
import br.com.poo.poobank.repository.TransacaoRepository;

@RestController
@RequestMapping("transacao")
@CrossOrigin
public class TransacaoController {
    
    @Autowired
    private TransacaoRepository repository;

    @GetMapping
    public ResponseEntity<List<Transacao>> listar() {
        List<Transacao> list = repository.findAll();
        return ResponseEntity.ok().body(list);
    }

    @PostMapping
    public ResponseEntity<Transacao> save(@RequestBody Transacao transacao) {
        Transacao novaTransacao = repository.save(transacao);
        return ResponseEntity.status(HttpStatus.CREATED).body(novaTransacao);
    }
}