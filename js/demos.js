/**
 * js/demos.js
 * All interactive widget demo functions used across slides.
 */

/* ── Slide 9: Canvas ────────────────────────────────────────── */
function drawCanvas() {
    const c   = document.getElementById('canvasDemo');
    const ctx = c.getContext('2d');
    ctx.clearRect(0, 0, c.width, c.height);

    // Rectangle
    ctx.fillStyle = 'red';
    ctx.fillRect(20, 20, 50, 50);

    // Circle
    ctx.beginPath();
    ctx.arc(150, 50, 30, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();

    // Text
    ctx.fillStyle = 'black';
    ctx.fillText('Hello Canvas', 100, 120);
}

/* ── Slide 10: Checkbutton ──────────────────────────────────── */
function demoCb() {
    const c1  = document.getElementById('cb1').checked;
    const c2  = document.getElementById('cb2').checked;
    const c3  = document.getElementById('cb3').checked;
    const txt = [];
    if (c1) txt.push('Subscribed');
    if (c2) txt.push('Terms');
    if (c3) txt.push('SMS');
    document.getElementById('cbOutput').innerText =
        txt.length > 0 ? 'Status: ' + txt.join(', ') : 'Status: Unchecked';
}

/* ── Slide 11: Radiobutton ──────────────────────────────────── */
function demoRb(el) {
    document.getElementById('rbOutput').innerText = 'Selected: ' + el.value;
}

/* ── Slide 13: Listbox ──────────────────────────────────────── */
function selectLb(el) {
    document.querySelectorAll('#listboxDemo .list-item')
            .forEach(i => i.classList.remove('selected'));
    el.classList.add('selected');
    document.getElementById('lbOutput').innerText = 'Selected: ' + el.innerText;
}

/* ── Slide 16: Progressbar ──────────────────────────────────── */
function fillProgress() {
    let w = 0;
    const bar  = document.getElementById('progFill');
    const intv = setInterval(() => {
        w += 5;
        bar.style.width = w + '%';
        if (w >= 100) clearInterval(intv);
    }, 100);
}

/* ── Slide 17: Notebook / Tabs ──────────────────────────────── */
function switchTab(e, id) {
    const nb = e.target.closest('.notebook');
    nb.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    nb.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    e.target.classList.add('active');
    nb.querySelector('#' + id).classList.add('active');
}

/* ── Slide 6: Entry demo ────────────────────────────────────── */
function demoEntry() {
    const val = document.getElementById('entryDemo').value;
    if (val) {
        document.getElementById('entryOutput').innerText = 'Hello, ' + val + '!';
    }
}

/* ── Slide 21: Message Boxes ────────────────────────────────── */
function showModal(type, title, msg) {
    document.getElementById('mTitle').innerText = title;
    document.getElementById('mMsg').innerText   = msg;
    document.getElementById('mIcon').innerText  =
        type === 'info'     ? 'ℹ️' :
        type === 'warning'  ? '⚠️' :
        type === 'question' ? '❓' : '❌';
    document.getElementById('modalOverlay').style.display = 'flex';
}
function closeModal() {
    document.getElementById('modalOverlay').style.display = 'none';
}

/* ── Slide 22: Dynamic Config ───────────────────────────────── */
function resetDemo22() {
    const lbl = document.getElementById('dynLabel');
    const btn = document.getElementById('dynBtn');
    lbl.innerText        = 'Original Text';
    lbl.style.color      = 'var(--text-primary)';
    lbl.style.background = 'transparent';
    btn.disabled         = false;
}

/* ── Slide 25: Calculator ───────────────────────────────────── */
let calcExp = '';

function calcInput(val) {
    calcExp += val;
    document.getElementById('calcDisplay').innerText = calcExp;
}
function calcClear() {
    calcExp = '';
    document.getElementById('calcDisplay').innerText = '0';
}
function calcEval() {
    try {
        // eslint-disable-next-line no-eval
        calcExp = eval(calcExp).toString();
        document.getElementById('calcDisplay').innerText = calcExp;
    } catch {
        document.getElementById('calcDisplay').innerText = 'Error';
        calcExp = '';
    }
}

/* ── Slide 27: Login ────────────────────────────────────────── */
function attemptLogin() {
    const u = document.getElementById('lUser').value;
    const p = document.getElementById('lPass').value;
    if (u === 'admin' && p === '1234') {
        document.getElementById('loginScreen').style.display = 'none';
        document.getElementById('dashScreen').style.display  = 'block';
    } else {
        showModal('error', 'Login Failed', 'Incorrect username or password.');
    }
}
function resetLogin() {
    document.getElementById('lUser').value              = '';
    document.getElementById('lPass').value              = '';
    document.getElementById('dashScreen').style.display = 'none';
    document.getElementById('loginScreen').style.display = 'block';
}

/* ── Slide 28: Billing ──────────────────────────────────────── */
let billGrandTotal = 0;

function addBillItem() {
    const name  = document.getElementById('billItem').value;
    const price = parseFloat(document.getElementById('billPrice').value);
    const qty   = parseInt(document.getElementById('billQty').value);

    if (!name || isNaN(price) || isNaN(qty)) return;

    const total = price * qty;
    billGrandTotal += total;

    const list = document.getElementById('billListContainer');
    if (list.innerText.includes('No items')) list.innerHTML = '';

    const row       = document.createElement('div');
    row.className   = 'bill-row';
    row.innerHTML   = `<span>${name} (x${qty})</span> <span>$${total.toFixed(2)}</span>`;
    list.appendChild(row);

    document.getElementById('billTotal').innerText = `Total: $${billGrandTotal.toFixed(2)}`;

    document.getElementById('billItem').value  = '';
    document.getElementById('billPrice').value = '';
    document.getElementById('billQty').value   = '';
}
/* ── Slide 32: File Handling & GUI Simulation ───────────────────────────────── */
// Simulating the file content in a variable
let studentDatabase = "John,22\nAnna,24\nWilliam,31";

function updateDisplay(text) {
    document.getElementById('demoOutput').value = text;
}

function mockAdd() {
    const name = document.getElementById('demoName').value;
    const marks = document.getElementById('demoMarks').value;

    if(name && marks) {
        studentDatabase += `\n${name},${marks}`;
        document.getElementById('demoOutput').value += `Added: ${name}\n`;
        document.getElementById('demoOutput').scrollTop = document.getElementById('demoOutput').scrollHeight;
        // Clear inputs
        document.getElementById('demoName').value = '';
        document.getElementById('demoMarks').value = '';
    } else {
        alert("Please enter both Name and Marks.");
    }
}

function mockView() {
    document.getElementById('demoOutput').value = "--- All Students ---\n" + studentDatabase;
}

function mockSearch() {
    const name = document.getElementById('demoName').value.toLowerCase();
    if(!name) {
        alert("Enter a name to search first.");
        return;
    }

    const lines = studentDatabase.split('\n');
    let result = "Student not found.";

    for(let line of lines) {
        if(line.toLowerCase().startsWith(name)) {
            result = "Found: " + line;
            break;
        }
    }

    document.getElementById('demoOutput').value = result;
}
/* ── Slide 35: Database Simulation ───────────────────────────────── */
let studentDB = [];

function renderTable(data) {
    const tbody = document.getElementById('dbTableBody');
    tbody.innerHTML = '';

    if (data.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" style="text-align:center; padding:10px; color:#888;">No records found.</td></tr>';
        return;
    }

    data.forEach(student => {
        const row = `<tr>
            <td style="border:1px solid #ccc; padding:4px;">${student.reg}</td>
            <td style="border:1px solid #ccc; padding:4px;">${student.name}</td>
            <td style="border:1px solid #ccc; padding:4px;">${student.degree}</td>
            <td style="border:1px solid #ccc; padding:4px;">${student.ts}</td>
        </tr>`;
        tbody.innerHTML += row;
    });
}

function dbCreate() {
    studentDB = []; // Reset DB
    alert("Database 'university.db' created!");
    renderTable(studentDB);
}

function dbInsert() {
    const reg = document.getElementById('dbReg').value;
    const name = document.getElementById('dbName').value;
    const city = document.getElementById('dbCity').value;
    const degree = document.getElementById('dbDegree').value;

    if(!reg || !name) {
        alert("Reg # and Name are required.");
        return;
    }

    const ts = new Date().toLocaleString();
    studentDB.push({ reg, name, city, degree, ts });
    renderTable(studentDB);
}

function dbRefresh() {
    renderTable(studentDB);
}

function dbSearch() {
    const reg = document.getElementById('dbReg').value;
    const found = studentDB.filter(s => s.reg === reg);
    renderTable(found);
}

function dbDelete() {
    const reg = document.getElementById('dbReg').value;
    const initialLen = studentDB.length;
    studentDB = studentDB.filter(s => s.reg !== reg);

    if(studentDB.length < initialLen) {
        renderTable(studentDB);
    } else {
        alert("Reg # not found.");
    }
}

function dbUpdate() {
    const reg = document.getElementById('dbReg').value;
    const name = document.getElementById('dbName').value;

    const idx = studentDB.findIndex(s => s.reg === reg);

    if (idx !== -1 && name) {
        studentDB[idx].name = name;
        renderTable(studentDB);
    } else {
        alert("Reg # not found or Name is empty.");
    }
}