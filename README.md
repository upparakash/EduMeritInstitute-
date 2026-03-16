# EduMerit Institute Website

A complete website solution with admin dashboard for content management.

## Features

### Frontend Website
- Responsive design
- Hero banner section
- About section
- Courses showcase
- Blog posts
- Contact form
- Social media links

### Admin Dashboard
- Secure login system
- Banner management (title, subtitle, image)
- About section editor
- Course management (add, edit, delete)
- Blog post management (add, edit, delete)
- Contact information editor
- Real-time content updates

## Login Credentials

**Username:** EduMerit2026  
**Password:** Wegrow@2026

## Setup Instructions

### Option 1: Using PHP Built-in Server (Recommended)

1. Make sure PHP is installed on your system
2. Open terminal/command prompt
3. Navigate to the project directory:
   ```
   cd "c:\Users\ADMIN\Downloads\Edumerit Institute Website"
   ```
4. Start the PHP server:
   ```
   php -S localhost:8000
   ```
5. Open browser and visit: `http://localhost:8000`

### Option 2: Using XAMPP/WAMP

1. Install XAMPP or WAMP
2. Copy the project folder to `htdocs` (XAMPP) or `www` (WAMP)
3. Start Apache server
4. Visit: `http://localhost/Edumerit Institute Website`

### Option 3: Static Files (Limited Functionality)

Simply open `index.html` in a browser. Note: PHP backend features won't work, but the site will use localStorage for content management.

## File Structure

```
├── index.html              # Main website homepage
├── admin/
│   ├── login.html         # Admin login page
│   └── dashboard.html     # Admin dashboard
├── public/
│   ├── css/
│   │   ├── style.css      # Frontend styles
│   │   └── admin.css      # Admin styles
│   ├── js/
│   │   ├── main.js        # Frontend JavaScript
│   │   └── dashboard.js   # Dashboard JavaScript
│   ├── images/            # Image uploads
│   └── uploads/           # File uploads
├── api/
│   ├── content.php        # Content retrieval API
│   └── save.php           # Content save API
└── Logo/                  # Logo files
```

## Usage Guide

### Accessing Admin Dashboard

1. Visit the website
2. Click "Admin" in the navigation menu
3. Login with provided credentials
4. Use the dashboard to manage content

### Managing Content

**Banner Management:**
- Update hero section title and subtitle
- Upload new banner images

**About Section:**
- Edit the about content

**Courses:**
- Add new courses with title, description, and icon
- Edit existing courses
- Delete courses

**Blog Posts:**
- Create new blog posts
- Add title, excerpt, date, and image
- Edit or delete existing posts

**Contact Information:**
- Update phone, email, and address

### Viewing Changes

Click "View Website" button in the dashboard to see your changes live.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- PHP (for backend API)
- LocalStorage (for client-side persistence)
- Font Awesome (for icons)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Security Notes

- Change default credentials in production
- Implement proper authentication system for production use
- Add CSRF protection
- Sanitize all user inputs
- Use HTTPS in production

## Customization

### Changing Colors

Edit CSS variables in `public/css/style.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
}
```

### Adding New Sections

1. Add HTML section in `index.html`
2. Add corresponding styles in `public/css/style.css`
3. Add management interface in `admin/dashboard.html`
4. Update JavaScript in `public/js/dashboard.js`

## Support

For issues or questions, contact the development team.

## License

© 2026 EduMerit Institute. All rights reserved.
