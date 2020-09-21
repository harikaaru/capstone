package Den.project;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional

public class TeamService {
	@Autowired
	public TeamRepository teamRepository;

	List<Team> teamsList=new ArrayList<>();
	
	 
	
	
//public List<Team> findAll(){
//	
//	return teamsList;
//}

public void save(Team team) {
	teamRepository.save(team);
}


}
