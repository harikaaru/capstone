package Den.project;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;







@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PlayerRestController {

	@Autowired 
	public PlayerService service;
	
	
	@Autowired 
	public PlayerRepository playerRepository;
	
	@GetMapping("/players")
	public List<Player> getPlayers(){
		return playerRepository.findAll();
	}
	@PostMapping("/players")
	public void savePlayer(@RequestBody Player player) {
		if(player.getAge()>18) {
		service.save(player);
	}}
	
	@GetMapping("/{teamname}/players")
	public List<Player> getPlayersByTeam(@PathVariable String teamname){
		return playerRepository.findPlayers(teamname);
	}
	
//	@PutMapping(path="/{name}")
//	public savePlayerScore(@PathVariable String name,@RequestBody int score){
//		
//		
//	return playerRepository.save(name,score);
//	
//	}
	

}
