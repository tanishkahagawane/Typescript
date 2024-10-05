var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Manager"] = 1] = "Manager";
    Role[Role["Read_only_user"] = 2] = "Read_only_user";
})(Role || (Role = {}));
console.log(Role);
