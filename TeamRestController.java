package Den.project;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;



@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TeamRestController {
	@Autowired
	private TeamService service;
	
	@Autowired
	private TeamRepository teamRepository;
	
	
	
	@GetMapping("/teams")
	public List<Team> getTeam(){
		return teamRepository.findAll();
	}
	@PostMapping("/teams")
	public void saveTeam(@RequestBody Team team) {
		service.save(team);
	}
	
//	@PostMapping("/teams")  
//	public ResponseEntity<Object> saveTeam(@RequestBody Team team) 
//	{  
//		Team savedTeam=service.save(team);    
//	URI location=ServletUriComponentsBuilder.fromCurrentRequest().path("/tid}").buildAndExpand(savedTeam.getTid()).toUri();  
//	return ResponseEntity.created(location).build();
//	
//	}
}
