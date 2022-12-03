package space.skiresorts.service;

import org.springframework.data.jpa.repository.JpaRepository;
import space.skiresorts.model.Domain;
import space.skiresorts.model.User;

public interface UserRepository extends JpaRepository<User, Long>{

}