## Ranking Movies and Albums

This is a project built using **C#** for the backend and **React** for the frontend. It allows users to organize movies and albums into ranked categories through a drag-and-drop interface.

### Key Features:
- Users can drag and drop items (movies and albums) into different ranking tiers.
- It includes a **React** frontend that interacts with a **C# API** backend to fetch data and update rankings.

## Tech Stack:
- **Frontend**: React.js
- **Backend**: C# (.NET Core)
- **Database**: In-memory storage (for simplicity, items are stored directly in the application)

## API Endpoints:

### 1. **Get All Items**
   - **URL**: `/item`
   - **Method**: `GET`
   - **Description**: Fetches all movies and albums.
   - **Response**: A list of all items.
   
   Example:
   ```json
   [
       {
           "id": 1,
           "title": "The Godfather",
           "imageId": 1,
           "ranking": 0,
           "itemType": 1
       },
       {
           "id": 2,
           "title": "Abbey Road",
           "imageId": 2,
           "ranking": 0,
           "itemType": 2
       }
   ]
   ```

### 2. **Get Items by Type**
   - **URL**: `/item/bytype/{itemType}`
   - **Method**: `GET`
   - **Description**: Fetches items based on the type (1 for movies, 2 for albums).
   - **Parameters**: `itemType` (1 or 2)
   - **Response**: A list of items filtered by type.
   
   Example:
   ```json
   [
       {
           "id": 1,
           "title": "The Godfather",
           "imageId": 1,
           "ranking": 0,
           "itemType": 1
       }
   ]
   ```

### 3. **Get Item by ID**
   - **URL**: `/item/byid/{id}`
   - **Method**: `GET`
   - **Description**: Fetches a single item by its ID.
   - **Parameters**: `id` (integer)
   - **Response**: The item matching the given ID.
   
   Example:
   ```json
   {
       "id": 1,
       "title": "The Godfather",
       "imageId": 1,
       "ranking": 0,
       "itemType": 1
   }
   ```

## How to Run:
- Open the project file and double-click on `ReactApp1.sln` (you must have Visual Studio installed).
- Alternatively, open **Visual Studio 2022** and load the solution from there.

## How to Use:
- On the **main page**, movies and albums are displayed.
- On the **Movie Ranking** page, you can drag movies into their respective ranking tiers (e.g., Top Tier, Middle Tier, etc.).
- The rankings are updated based on where the item is dropped.

## Credits:
- Special thanks to FreeCodeCamp.org for this project. It helped me understand how a use case works from backend to frontend with C# and React syntax.
