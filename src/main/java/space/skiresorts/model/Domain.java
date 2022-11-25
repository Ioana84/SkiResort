package space.skiresorts.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Getter @Setter @NoArgsConstructor
@Entity(name = "domains")
public class Domain {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;
    private int domainLength;
    @Column(nullable = false)
    private String domainName;
    private String domainDescription;
    private int domainAltitude;
    @OneToMany (mappedBy="domain")
    private Set<Slope> slopes;
    private String country; //TODO : sa fie enum

}
