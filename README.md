# 🧱 Blockchain-based Task Management System

A secure, tamper-proof Task Management System built using Blockchain Technology. Each task added by a user becomes a block in the blockchain, ensuring data integrity, transparency, and immutability. The system features RESTful APIs, real-time frontend interaction, validation mechanisms, and Docker containerization for easy deployment.

---

📌 Objective

The primary goal of this project is to demonstrate how blockchain can be used beyond cryptocurrencies — in this case, for secure task tracking. Each task acts as a block in a chain, preventing tampering and ensuring accountability.

---

🛠️ Tools & Technologies Used

| Technology             | Purpose                                                  |
|------------------------|----------------------------------------------------------|
| **Node.js**            | Backend server for blockchain creation and logic         |
| **Express.js**         | RESTful API development                                  |
| **HTML / CSS / JS**    | Frontend UI for user interaction                         |
| **Docker**             | Containerization for deployment                          |
| **Git & GitHub**       | Version control and collaboration                        |
| **Postman**            | API testing during development                           |

---

🔄 Summary of Work Done

Phase 1:
- Designed a basic blockchain structure from scratch.

Phase 2:
- Built REST APIs for adding and viewing tasks.
- Developed a frontend interface.
- Integrated Docker for containerized deployment.

Phase 3:
- Added blockchain validation logic.
- Thorough testing for reliability and security.
- Finalized documentation and demo setup.

---

✨ Features Implemented

- ✅ Add a new task (creates a new block)
- 📜 Display all tasks (excluding genesis block)
- 🔍 Verify blockchain integrity
- 🔗 Automatic hash linking between blocks
- 🧪 REST API integrated with frontend
- 📦 Dockerized deployment

---

## 🖼️ Screenshots

<details>
<summary>1. UI Home Page</summary>
<p>![image](https://github.com/user-attachments/assets/9b79cb23-c2ab-43e4-89dd-138c2193193f)
</p>
</details>

<details>
<summary>2. After Adding a Task</summary>
<p>![image](https://github.com/user-attachments/assets/b2b7b2e0-c284-493c-b299-b688d5d527df)
</p>
</details>

<details>
<summary>3. Task List Loaded</summary>
<p>![image](https://github.com/user-attachments/assets/4dac4db3-d2aa-4426-93a4-b8e32ae97de5)
</p>
</details>

<details>
<summary>4. Blockchain Valid Message</summary>
<p>![image](https://github.com/user-attachments/assets/5f42a012-1f71-4f36-9d3f-1352fea876c6)
</p>
</details>

<details>
<summary>5. Docker Container Running</summary>
<p>![image](https://github.com/user-attachments/assets/d010d898-1889-4ce1-8e3f-caf581790b52)
</p>
</details>

---

## 📦 Sample Block Structure

```json
{
  "index": 2,
  "timestamp": "2025-04-21T14:52:03.123Z",
  "task": "Complete UI Design",
  "owner": "Pulashya",
  "previousHash": "89a3f1...",
  "hash": "f47cd1..."
}
