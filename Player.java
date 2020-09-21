package Den.project;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name="player")
public class Player {
	
    @Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	
	
    public int id;	
   
	public String name;
    
	public int age;	
   
    public String caption;
   
    
    public String playersteamname;
    
    
    
//    @ManyToOne
//    
//	private Team team;
	public Player() {
		
	}

	
	


	public Player(String name, int age, String caption, String playersteamname) {
	super();
	this.name = name;
	this.age = age;
	this.caption = caption;
	this.playersteamname = playersteamname;
}


	public String getName() {
		return name;
	}

	


	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}
	
	
	public String getCaption() {
		return caption;
	}


	public void setCaption(String caption) {
		this.caption = caption;
	}
	


	public String getPlayersteamname() {
		return playersteamname;
	}


	public void setPlayersteamname(String playersteamname) {
		this.playersteamname = playersteamname;
	}





	@Override
	public String toString() {
		return "Player [name=" + name + ", age=" + age + ", caption=" + caption + ", playersteamname=" + playersteamname
				+ "]";
	}


	

	
    
	
}
 