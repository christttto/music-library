# Allegro

Hello! This readme will explain the structure of Allegro, a music library implemted using React.<br>
Click this link to look at the application!<br>
[Allegro](https://christttto.github.io/music-library/)<br>

## Main Requirements

1. Ability to scroll through all the songs
2. Ability to star a song (unstar)
3. Access to a seperate list with only the starred songs
4. Ability to search for a song

### User to scroll through the songs

The User must be able to look at all of the songs.<br>

### Showing all the songs that have been "starred."

There needs to be a seperate list that will show all songs user has seleted.<br>

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Thought process

### Two panels

Because I am showing two rows of list (all, star), I will want to divide space.
If I have enough time, make it responsive, so if the screen is small, stack, instead of dividing.
Each column will have Title (all,star)
In front of each listing, depending on the column, it will have icon. (regular star for star column, empty star for all column)
If the empty star of all column is clicked, the song will be added to the star list.
The all list should have a search bar, to filter the list.

https://www.figma.com/file/cN9Nl2mxXK0ILN2Q9TzIBntr/Music-library?node-id=0%3A1

### 1 make two lists horizontal

### 2 make star button, be able to add url to state.star

star button made.  
make on click, on change. Try to console out the url first.

### 3 make unstar ability, remove the value from state.star

### 4 search function

### 5 json call GET

### 6 why at favorite, cannot unstar
