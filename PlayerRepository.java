package Den.project;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository

public interface PlayerRepository  extends JpaRepository<Player,String>{
	public List<Player> findAll();
	@Query(value="Select * FROM Player WHERE playersteamname=?1 ORDER BY RAND() LIMIT 2",nativeQuery=true)
	public List<Player> findPlayers(String teamname);	
}