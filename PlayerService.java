package Den.project;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class PlayerService {
	@Autowired
	public PlayerRepository playerRepository;
       List<Player> playersList=new ArrayList<>();
      
		
		public void save(Player player) {
			playerRepository.save(player);
		}
		
		public List<Player> findPlayers(){
			return playersList;
		}
		
		
		
}
