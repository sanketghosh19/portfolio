from flask import Flask, render_template, request, flash, redirect, url_for

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Required for flash messages

@app.route('/')
def home():
    return render_template('index.html', active_page='home')

@app.route('/about')
def about():
    return render_template('about.html', active_page='about')

@app.route('/projects')
def projects():
    return render_template('projects.html', active_page='projects')

@app.route('/contact')
def contact():
    return render_template('contact.html', active_page='contact')

@app.route('/submit_contact', methods=['POST'])
def submit_contact():
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        subject = request.form.get('subject')
        message = request.form.get('message')
        
        # In a real application, you would save this data to a database
        # or send an email. For now, we'll just print it to the console.
        print(f"Contact form submission from {name} ({email}):")
        print(f"Subject: {subject}")
        print(f"Message: {message}")
        
        # Flash a success message
        flash('Thank you for your message! I will get back to you soon.', 'success')
        
        return redirect(url_for('contact'))

if __name__ == '__main__':
    app.run(debug=True) 