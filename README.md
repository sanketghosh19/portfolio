# Developer Portfolio Website

A modern, responsive portfolio website for software developers built with Python and Flask.

## Features

- Responsive design that works on all devices
- Modern UI with Bootstrap 5
- Interactive animations and effects
- Contact form with validation
- Project showcase with filtering capability
- Detailed about page with skills and experience
- Clean and professional design

## Screenshots

(Add screenshots of your portfolio website here)

## Technologies Used

- **Backend**: Python, Flask
- **Frontend**: HTML5, CSS3, JavaScript
- **UI Framework**: Bootstrap 5
- **Icons**: Bootstrap Icons
- **Animations**: CSS animations

## Setup and Installation

### Prerequisites

- Python 3.7 or higher
- pip (Python package manager)

### Installation Steps

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Create and activate a virtual environment (optional but recommended):
   ```
   python -m venv venv
   
   # On Windows:
   venv\Scripts\activate
   
   # On macOS/Linux:
   source venv/bin/activate
   ```

3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

4. Run the application:
   ```
   python app.py
   ```

5. Open your browser and navigate to:
   ```
   http://127.0.0.1:5000
   ```

## Customization

### Personal Information

Update the templates in the `templates` directory to add your own information:

- Edit `templates/index.html` for the homepage content
- Edit `templates/about.html` for your bio, skills, and experience
- Edit `templates/projects.html` to showcase your own projects
- Edit `templates/contact.html` to update your contact information

### Styling

Customize the appearance by modifying:

- `static/css/style.css` - For custom styles
- Update Bootstrap variables in the templates if needed

### Images

Replace the placeholder images in the `static/images` directory with your own:

- Add your profile picture
- Add project screenshots
- Add any other images you want to display

## Deployment

### Deploy to Heroku

1. Create a `Procfile` in the root directory with:
   ```
   web: gunicorn app:app
   ```

2. Add gunicorn to your requirements:
   ```
   pip install gunicorn
   pip freeze > requirements.txt
   ```

3. Create a Heroku app and deploy:
   ```
   heroku create your-portfolio-name
   git push heroku main
   ```

### Deploy to PythonAnywhere

1. Sign up for a PythonAnywhere account
2. Upload your code or clone from GitHub
3. Set up a web app with Flask
4. Configure your WSGI file to point to your app
5. Set up any environment variables needed

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Bootstrap for the UI components
- Flask for the web framework
- Font Awesome for the icons
- Unsplash for placeholder images 