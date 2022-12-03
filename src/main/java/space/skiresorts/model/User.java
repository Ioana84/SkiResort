package space.skiresorts.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Getter @Setter @NoArgsConstructor
@Entity(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "userId", nullable = false)
    private Long userId;
    @Enumerated(EnumType.STRING)
    private ERoles rolePermission;
    private String idToken;
    private String name;
    private String familyName;
    private String email;
    private String givenName;

}
