let employees = [
    { id: 1, name: "Nguyễn Văn A", position: "Developer", salary: 1000 },
    { id: 2, name: "Trần Thị B", position: "Tester", salary: 900 },
    { id: 3, name: "Lê Văn C", position: "Manager", salary: 1500 }
];

function addEmployee() {
    let id = +prompt("Nhập ID:");
    let name = prompt("Nhập tên:");
    let position = prompt("Nhập vị trí:");
    let salary = +prompt("Nhập lương:");

    if (!id || !name || !position || !salary) {
        alert("Thông tin không hợp lệ");
        return;
    }

    employees.push({ id, name, position, salary });
    alert("Nhân viên đã được thêm!");
}

function deleteEmployee() {
    let id = +prompt("Nhập ID nhân viên cần xóa:");
    let index = employees.findIndex(emp => emp.id === id);

    if (index !== -1) {
        if (confirm(`Bạn có chắc muốn xóa nhân viên ${employees[index].name}?`)) {
            employees.splice(index, 1);
            alert("Nhân viên đã bị xóa");
        }
    } else {
        alert("Không tìm thấy nhân viên.");
    }
}

function updateSalary() {
    let id = +prompt("Nhập ID nhân viên cần cập nhật lương:");
    let emp = employees.find(emp => emp.id === id);

    if (emp) {
        let salary = +prompt("Nhập lương mới:");
        if (!salary) {
            alert("Lương không hợp lệ!");
            return;
        }
        emp.salary = salary;
        alert("Lương đã được cập nhật");
    } else {
        alert("Không tìm thấy nhân viên.");
    }
}

function searchEmployee() {
    let name = prompt("Nhập tên nhân viên cần tìm:");
    let result = employees.filter(emp => emp.name.includes(name));

    if (result.length) {
        console.table(result);
        alert(`Tìm thấy ${result.length} nhân viên, xem console để biết thêm!`);
    } else {
        alert("Không tìm thấy nhân viên.");
    }
}

function showEmployees() {
    console.table(employees);
}

function mainMenu() {
    while (true) {
        let choice = +prompt(
            "Chọn chức năng:\n" +
            "1. Thêm nhân viên\n" +
            "2. Xóa nhân viên\n" +
            "3. Cập nhật lương\n" +
            "4. Tìm kiếm nhân viên\n" +
            "5. Hiển thị danh sách\n" +
            "6. Thoát"
        );

        switch (choice) {
            case 1: 
            addEmployee(); break;
            case 2: 
            deleteEmployee(); break;
            case 3: 
            updateSalary(); break;
            case 4: 
            searchEmployee(); break;
            case 5: 
            showEmployees(); break;
            case 6: alert("Thoát chương trình"); 
            return;
            default: alert("Lựa chọn không hợp lệ");
        }
    }
}
mainMenu();