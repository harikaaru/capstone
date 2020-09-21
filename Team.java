package Den.project;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="team")
public class Team {

	@Id
	public String teamname;
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="playersteamname",referencedColumnName="teamname")
	private List<Player> playersList=new ArrayList<>();
	public Team() {
		
	}
	
	public Team(String teamname) {
		super();
		
		this.teamname = teamname;
	}
	
	public String getTeamname() {
		return teamname;
	}
	

	public void setTeamname(String teamname) {
		this.teamname = teamname;
	}
	
	public List<Player> getPlayersList() {
	return playersList;
}

public void setPlayersList(List<Player> playersList) {
	this.playersList = playersList;
}

@Override
public String toString() {
	return "Team [teamname=" + teamname + "]";
}


	

}
