package space.skiresorts;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@EntityScan("space.skiresorts.*")
public class SkiresortsApplication {

	public static void main(String[] args) {
		SpringApplication.run(SkiresortsApplication.class, args);
	}

}
