package space.skiresorts.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter @Setter @NoArgsConstructor
@Entity(name ="slopes")
public class Slope {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;
    @Column(nullable = false)
    private String slopeName;
    private String slopeColor;
    private int slopeLength;
    @ManyToOne
    @JoinColumn(name = "domain_id")
    private Domain domain;

}
