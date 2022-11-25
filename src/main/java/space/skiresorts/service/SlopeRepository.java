package space.skiresorts.service;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import space.skiresorts.model.Slope;

import java.util.Optional;

public interface SlopeRepository extends JpaRepository<Slope, Long>{
    @Query("select d from slopes d where d.slopeName=:name")
    Optional<Slope> findByName(@Param("name")String slopeName);

    @Modifying
    @Transactional
    @Query("DELETE FROM slopes WHERE slopeName=:name")
    void deleteByName(@Param("name")String slopeName);
}