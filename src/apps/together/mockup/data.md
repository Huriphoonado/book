---
layout: layout.hbs
---

# Data Models

In my application, all listeners will be able to post their thoughts on the current song and immediately see eachother's updates in real time. The title of the song will be updated in real time as well. Users can view an archive of discussions and songs.

Radio_Discussion_Application
	
	Postings
	
		Time_Of_Post
			
			Name
			
			Description
		
		Time_Of_Post
			
			Name
			
			Description
		
		...
	
	Archive
	
		Date
			
			Time_Of_Post
			
				Name
			
				Description
		
			Time_Of_Post
		
				Name
		
				Description
		
			...
		
		...
	
	Songs
	
	
		Current_Song
	
		History
	
			Date
	
				Time_Of_Song
	
					Name
	
				Time_Of_Song
	
					Name
	
				...
	
			...
