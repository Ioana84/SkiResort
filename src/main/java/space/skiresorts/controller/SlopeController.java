package space.skiresorts.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import space.skiresorts.model.Domain;
import space.skiresorts.model.Slope;
import space.skiresorts.service.DomainRepository;
import space.skiresorts.service.SlopeRepository;

import java.util.Iterator;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Controller
@RequestMapping("api/v1/slopes")
public class SlopeController {
    @Autowired
    private SlopeRepository slopeRepository;
    @Autowired
    private DomainRepository domainRepository;

    /**
     * Get all slopes from a domain
     */
    @GetMapping
    public ResponseEntity<List<Slope>> getAllSlopes() {
        List<Slope> slopes = slopeRepository.findAll();
        return new ResponseEntity<>(slopes, HttpStatus.OK);
    }

    /**
     * Select one slope from a domain by id
     * @param slopeName
     * @return slope
     */
    @GetMapping("/{slopeName}")
    public ResponseEntity<Slope> getSlopeById(@PathVariable("slopeName") String slopeName) {
        Optional<Slope> slopeData = slopeRepository.findByName(slopeName);

        if (slopeData.isPresent()) {
            return new ResponseEntity<>(slopeData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    /**
     * `delete slope by name and domain
     * @param slopeName
     * @param domainName
     * @return slope
     */
    @DeleteMapping("/{domainName}/{slopeName}")
    public ResponseEntity deleteSlope(
            @PathVariable String slopeName,
            @PathVariable String domainName)
    {
        Optional<Domain> domainData = domainRepository.findByName(domainName);
        if (!domainData.isPresent()) return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        Set<Slope> slopes = domainData.get().getSlopes();
        for (Iterator<Slope> it = slopes.iterator(); it.hasNext(); ) {
            Slope s = it.next();
            if (s.getSlopeName().equals(slopeName)) {
                slopeRepository.deleteById(s.getId());
            }
        }
         return new ResponseEntity(HttpStatus.ACCEPTED);
    }
}
