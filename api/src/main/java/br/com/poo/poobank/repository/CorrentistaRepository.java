package br.com.poo.poobank.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.poo.poobank.domain.Correntista;

@Repository
public interface CorrentistaRepository extends JpaRepository<Correntista, Long> {
    Optional<Correntista> findByCpfAndSenha(String cpf, String senha);
}
