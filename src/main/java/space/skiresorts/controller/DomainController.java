package space.skiresorts.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import space.skiresorts.model.Domain;
import space.skiresorts.service.DomainRepository;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("api/v1/domains")
public class DomainController {
    @Autowired
    private DomainRepository domainRepository;

    /**
     * Get all domains
     */
    @GetMapping
    public ResponseEntity<List<Domain>> getAllDomains() {
        List<Domain> domains = domainRepository.findAll();
        return new ResponseEntity<>(domains, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<?> createDomain(@RequestBody Domain domain) {
        try {
            Domain _domain = domainRepository.save(domain);
            return new ResponseEntity<>(_domain, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(e, HttpStatus.BAD_REQUEST);
        }
    }

    /**
     * Select one domain by id
     * @param domainName
     * @return domain
     */
    @GetMapping("/{domainName}")
    public ResponseEntity<Domain> getDomainById(@PathVariable("domainName") String domainName) {
        Optional<Domain> domainData = domainRepository.findByName(domainName);

        if (domainData.isPresent()) {
            return new ResponseEntity<>(domainData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    /**
     * `delete` one domain by name
     * @param domainName
     * @return domain
     */
    @DeleteMapping("/{domainName}")
    public ResponseEntity deleteDomain(@PathVariable ("domainName") String domainName) {
         domainRepository.delete(domainName);
         return new ResponseEntity(HttpStatus.ACCEPTED);

    }
}
