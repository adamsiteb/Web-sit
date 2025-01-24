from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)

class Z44o:
    def __init__(self, request):
        self.request = request

    def __Ai__(self):
        # الكود الأصلي هنا
        response = requests.post('https://www.blackbox.ai/api/chat', cookies=cookies, headers=headers, json=json_data).text
        return response

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/ask', methods=['POST'])
def ask():
    user_input = request.form['user_input']
    ai = Z44o(user_input)
    response = ai.__Ai__()
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True)
