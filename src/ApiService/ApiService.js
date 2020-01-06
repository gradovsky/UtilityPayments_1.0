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
export const ExpensesApi = {
    fetchExpense() {
        return instance.get('expenses/');
    },
    addExpense(expense) {
        return instance.post('expenses/', expense);
    },
    deleteExpense(expenseId) {
        return instance.delete('expenses/' + expenseId);
    },
    editExpense(expense) {
        return instance.put('expenses/' + expense.id, expense);
    },
    fetchExpenseById(expenseId) {
        return instance.get('expenses/' + expenseId);
    }
};
