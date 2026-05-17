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
/* ── Slide 36: Postgres Simulation ───────────────────────────────── */
let pgConnected = false;
let pgDB = [];

function pgConnect() {
    const status = document.getElementById('pgStatus');
    status.innerText = "Connecting to Postgres...";
    status.style.color = "orange";

    // Simulate network delay
    setTimeout(() => {
        pgConnected = true;
        status.innerText = "Connected via psycopg2 (Postgres Server)";
        status.style.color = "green";
        pgRefresh(); // Load initial data
    }, 1000);
}

function pgRender(data) {
    const tbody = document.getElementById('pgTableBody');
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

function pgInsert() {
    if (!pgConnected) return alert("Please click Connect first!");
    const reg = document.getElementById('pgReg').value;
    const name = document.getElementById('pgName').value;
    const ts = new Date().toLocaleString();
    if(reg && name) {
        pgDB.push({ reg, name, degree: "CS", ts });
        pgRender(pgDB);
    }
}

function pgRefresh() {
    if (!pgConnected) return;
    // Simulate initial data if empty
    if(pgDB.length === 0) {
        pgDB = [
            {reg: '101', name: 'Alice', degree: 'CS', ts: '10:00 AM'},
            {reg: '102', name: 'Bob', degree: 'IT', ts: '10:05 AM'}
        ];
    }
    pgRender(pgDB);
}

function pgSearch() {
    if (!pgConnected) return;
    const reg = document.getElementById('pgReg').value;
    const found = pgDB.filter(s => s.reg === reg);
    pgRender(found);
}

function pgDelete() {
    if (!pgConnected) return;
    const reg = document.getElementById('pgReg').value;
    const initialLen = pgDB.length;
    pgDB = pgDB.filter(s => s.reg !== reg);
    if(pgDB.length < initialLen) pgRender(pgDB);
}

function pgUpdate() {
    if (!pgConnected) return;
    const reg = document.getElementById('pgReg').value;
    const name = document.getElementById('pgName').value;
    const idx = pgDB.findIndex(s => s.reg === reg);
    if (idx !== -1 && name) {
        pgDB[idx].name = name;
        pgRender(pgDB);
    }
}
/* ── Slide 38: Firebase Realtime Database Simulator Logic ───────────────────────────────── */

// Initial Database Structure
let database = {
    users:{
        john123:{
            profile:{
                firstname:'John',
                lastname:'Smith',
                address:{
                    city:'New York',
                    country:'USA'
                }
            },
            contact:{
                email:'john@gmail.com',
                phone:'111222333'
            }
        },
        emma456:{
            profile:{
                firstname:'Emma',
                lastname:'Watson',
                address:{
                    city:'London',
                    country:'UK'
                }
            },
            courses:{
                course1:'Web Development',
                course2:'Database Systems'
            }
        }
    },
    college:{
        departments:{
            cs:{
                students:{
                    std01:{
                        name:'Ali',
                        semester:'5th'
                    },
                    std02:{
                        name:'Sara',
                        semester:'6th'
                    }
                }
            }
        }
    }
};

// --- CORE UTILITIES ---

function generateAutoId(){
    return 'node_' + Math.random().toString(36).substring(2,10);
}

function getReference(path){
    if(!path) return database;
    let parts = path.split('/').filter(Boolean);
    let current = database;
    for(let part of parts){
        if(current[part] === undefined){
            return null;
        }
        current = current[part];
    }
    return current;
}

function setReference(path, value){
    let parts = path.split('/').filter(Boolean);
    let current = database;
    for(let i=0; i<parts.length-1; i++){
        if(!current[parts[i]]){
            current[parts[i]] = {};
        }
        current = current[parts[i]];
    }
    current[parts[parts.length-1]] = value;
}

function deleteReference(path){
    if(!path) return;
    let parts = path.split('/').filter(Boolean);
    let current = database;
    for(let i=0; i<parts.length-1; i++){
        if(!current[parts[i]]) return;
        current = current[parts[i]];
    }
    delete current[parts[parts.length-1]];
}

// --- VISUALS: TOAST & TREE ---

function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) {
        // Fallback: create container if not found (e.g. if script runs before HTML)
        console.warn("Toast container not found");
        return;
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerText = message;

    container.appendChild(toast);

    // Remove after 3 seconds
    setTimeout(() => {
        toast.style.animation = 'slideIn 0.3s reverse forwards';
        setTimeout(() => {
            if(toast.parentElement) toast.remove();
        }, 300);
    }, 3000);
}

let flashingPath = null;
let flashTimeout = null;

function renderTree(data, parent, path='', highlightPath = null){
    if(!parent) parent = document.getElementById('sim-tree-container');
    if(!parent) return;

    parent.innerHTML = '';

    for(let key in data){
        let fullPath = path ? path + '/' + key : key;
        let node = document.createElement('div');
        node.className = 'tree-node';

        let label = document.createElement('div');
        label.className = 'node-label';

        // Check if this path should flash
        if (highlightPath === fullPath) {
            label.classList.add('flashing-node');
        }

        if(typeof data[key] === 'object' && data[key] !== null){
            label.innerHTML = '📁 <b>' + key + '</b> <span class="path">(' + fullPath + ')</span>';
        } else {
            label.innerHTML = '📄 <b>' + key + '</b> : ' + data[key] + ' <span class="path">(' + fullPath + ')</span>';
        }
        node.appendChild(label);

        if(typeof data[key] === 'object' && data[key] !== null){
            let children = document.createElement('div');
            children.className = 'children';
            renderTree(data[key], children, fullPath, highlightPath);
            label.onclick = function(){
                children.classList.toggle('hidden');
            }
            node.appendChild(children);
        }
        parent.appendChild(node);
    }
}

function refreshTree(highlight = null) {
    renderTree(database, null, '', highlight);
}

// --- HANDLERS (Updated with Toasts & Highlighting) ---

function addAutoNode(){
    let parentPath = document.getElementById('autoParent').value;
    let parent = getReference(parentPath);
    if(parent == null || typeof parent !== 'object'){
        showToast('Invalid Parent Path', 'error');
        return;
    }
    let id = generateAutoId();
    parent[id] = { sampleKey:'sampleValue' };
    showToast('Auto Node Added Successfully');
    refreshTree(parentPath + '/' + id);
}

function addManualNode(){
    let parentPath = document.getElementById('manualParent').value;
    let id = document.getElementById('manualId').value;
    let parent = getReference(parentPath);
    if(parent == null || typeof parent !== 'object'){
        showToast('Invalid Parent Path', 'error');
        return;
    }
    parent[id] = { sampleKey:'sampleValue' };
    showToast('Manual Node Added Successfully');
    refreshTree(parentPath + '/' + id);
}

function addKeyValue(){
    let path = document.getElementById('addPath').value;
    let key = document.getElementById('addKey').value;
    let value = document.getElementById('addValue').value;
    let ref = getReference(path);
    if(ref == null || typeof ref !== 'object'){
        showToast('Invalid Path', 'error');
        return;
    }
    ref[key] = value;
    showToast('Key-Value Pair Added');
    refreshTree(path + '/' + key);
}

function updateValueFunction(){
    let path = document.getElementById('updatePath').value;
    let key = document.getElementById('updateKey').value;
    let value = document.getElementById('updateValue').value;
    let ref = getReference(path);
    if(ref == null || typeof ref !== 'object'){
        showToast('Invalid Path', 'error');
        return;
    }
    ref[key] = value;
    showToast('Value Updated Successfully');
    refreshTree(path + '/' + key);
}

function deleteKeyFunction(){
    let path = document.getElementById('deletePath').value;
    let key = document.getElementById('deleteKey').value;
    let ref = getReference(path);
    if(ref == null || typeof ref !== 'object'){
        showToast('Invalid Path', 'error');
        return;
    }
    if(ref[key] !== undefined){
        delete ref[key];
        showToast('Key Deleted Successfully');
        refreshTree(path); // Flash the parent to show change
    } else {
        showToast('Key not found', 'error');
    }
}

function deleteNodeFunction(){
    let path = document.getElementById('deleteNodePath').value;
    if(!path) {
        showToast('Please enter a path', 'error');
        return;
    }

    if(confirm(`Are you sure you want to delete ${path}?`)){
        deleteReference(path);
        showToast('Node Deleted Successfully');

        // FIX: Calculate Parent Path to flash
        let parts = path.split('/').filter(Boolean);
        parts.pop(); // Remove the deleted node
        let parentPath = parts.join('/');

        refreshTree(parentPath); // Flash the parent
    }
}

// --- AUTO COMPLETE LOGIC ---

// Handle Autocomplete for all path inputs
document.addEventListener('input', function(e) {
    if(e.target.classList.contains('autocomplete-path')) {
        const val = e.target.value;
        const list = document.getElementById('autocomplete-list');

        if(!val) {
            list.style.display = 'none';
            return;
        }

        // Logic: Determine parent based on current input up to the last slash
        const parts = val.split('/').filter(Boolean);
        let parent = database;
        let suggestions = [];

        if(parts.length > 0) {
            // Traverse to the last known directory
            for(let i=0; i<parts.length-1; i++){
                if(parent && parent[parts[i]]) {
                    parent = parent[parts[i]];
                } else {
                    parent = null;
                    break;
                }
            }
        }

        if(parent && typeof parent === 'object') {
            const currentTyping = parts.length > 0 ? parts[parts.length-1] : '';

            for(let key in parent) {
                if(key.toLowerCase().includes(currentTyping.toLowerCase())) {
                    suggestions.push(key);
                }
            }
        }

        // Render List
        if(suggestions.length > 0) {
            list.innerHTML = '';
            suggestions.forEach(s => {
                const item = document.createElement('div');
                item.className = 'autocomplete-item';
                item.innerText = s;

                // Construct the full path replacing the last part with the suggestion
                const baseParts = parts.slice(0, parts.length-1);
                const fullPath = baseParts.length > 0 ? baseParts.join('/') + '/' + s : s;

                item.onclick = function() {
                    e.target.value = fullPath;
                    list.style.display = 'none';
                };
                list.appendChild(item);
            });
            list.style.display = 'block';

            // Position list below input
            const rect = e.target.getBoundingClientRect();
            const parentRect = e.target.parentElement.getBoundingClientRect();
            list.style.top = (e.target.offsetTop + e.target.offsetHeight) + 'px';
            list.style.left = e.target.offsetLeft + 'px';

        } else {
            list.style.display = 'none';
        }
    }
});

// Close autocomplete when clicking outside
document.addEventListener('click', function(e) {
    const list = document.getElementById('autocomplete-list');
    if(e.target !== list && !e.target.classList.contains('autocomplete-path')) {
        list.style.display = 'none';
    }
});

// Initial Load (Fallback if script in HTML doesn't catch it immediately)
setTimeout(() => {
    refreshTree();
}, 500);