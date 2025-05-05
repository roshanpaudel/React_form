# 📝 Form App - Controlled Form with Data Display

A React application demonstrating a **controlled form** with real-time data display and a list of submitted entries. Built using **prop drilling** and **state uplifting** with a modular component-based structure.

---

## 🚀 Features

- **Controlled Form**: All form fields are managed via React state.
- **Real-time Display**: User inputs update and display instantly.
- **Data Submission**: Form data is saved to a submitted data list.
- **List View**: Displays a running list of submitted entries.
- **State Management**: Uses prop drilling and state uplifting.
- **Component-Based**: UI divided into multiple reusable components.

---

## 🛠 Technologies Used

- React
- JavaScript (ES6+)
- HTML
- CSS (or CSS framework)

---

## 🧱 Architecture

### Component Structure

App
|
--- FormComponent
| |
| --- InputComponent1
| |
| --- InputComponent2
|
--- DisplayComponent
|
--- ListComponent

### Responsibilities

- **App Component**:

  - Manages the form state and submitted list.
  - Passes props down to child components.

- **FormComponent**:

  - Contains input fields and the submit button.
  - Accepts state and setters as props for controlled input.

- **DisplayComponent**:

  - Shows current form input values in real-time.

- **ListComponent**:
  - Displays the list of all submitted form data.

---

## 🔄 Data Flow

1. **User Input** → Input field triggers `onChange`
2. **Event Handler** → Updates state via setter from parent
3. **State Uplifting** → Parent state reflects latest input
4. **Prop Drilling** → Updated state passed to display and input components
5. **Real-time Display** → DisplayComponent updates with current input
6. **Form Submission** → Data added to submitted list in App
7. **List Update** → ListComponent re-renders with new data

---

## 🧪 How to Run

### Prerequisites

- [Node.js](https://nodejs.org/)
- npm
- Git (optional)

### Installation

```bash
git clone <repository_url>   # If available
cd <repository_name>
npm install
npm start
```
