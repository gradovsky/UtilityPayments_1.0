import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8080/',

});
export const EnergyApi = {
    fetchEnergy() {
        return instance.get('energy/');
    },
    addEnergy(energy) {
        return instance.post('energy/', energy);
    },
    deleteEnergy(energyId) {
        return instance.delete('energy/' + energyId);
    },
    editEnergy(energy) {
        return instance.put('energy/' + energy.id, energy);
    },
    fetchEnergyById(energyId) {
        return instance.get('energy/' + energyId);
    }
};

export const UsersApi = {
    fetchUsers() {
        return instance.get('users/');
    },
    addUser(user) {
        return instance.post('users/', user);
    },
    deleteUser(userId) {
        return instance.delete('users/' + userId);
    },
    editUser(user) {
        return instance.put('users/' + user.id, user);
    },
    fetchUserById(userId) {
        return instance.get('users/' + userId);
    }
};
export const ExpenseApi = {
    fetchExpense() {
        return instance.get('expense/');
    },
    addExpense(expense) {
        return instance.post('expense/', expense);
    },
    deleteExpense(expenseId) {
        return instance.delete('expense/' + expenseId);
    },
    editExpense(expense) {
        return instance.put('expense/' + expense.id, expense);
    },
    fetchExpenseById(expenseId) {
        return instance.get('expense/' + expenseId);
    }
};
