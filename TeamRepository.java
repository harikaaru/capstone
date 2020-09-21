package Den.project;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;



@Repository

public interface TeamRepository extends JpaRepository<Team,String> {
	
    @Query(value="Select * FROM Team ORDER BY RAND() LIMIT 3 ",nativeQuery=true)
	
	public List<Team> findAll();

	
	
}
