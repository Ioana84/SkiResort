package space.skiresorts.service;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import space.skiresorts.model.Domain;
import space.skiresorts.model.Role;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long>{

}