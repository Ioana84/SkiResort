package space.skiresorts.service;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import space.skiresorts.model.Domain;

import java.util.Optional;

public interface DomainRepository extends JpaRepository<Domain, Long>{
    @Query("select d from domains d where d.domainName=:name")
    Optional<Domain> findByName(@Param("name")String domainName);
    @Modifying
    @Transactional
    @Query("DELETE FROM domains WHERE domainName=:name")
    void delete(@Param("name")String domainName);
}