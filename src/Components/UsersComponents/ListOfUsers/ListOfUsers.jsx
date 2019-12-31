import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import s from './ListOfUsers.module.css'
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";


class ListOfUsers extends React.Component {

    render() {
        return (
            <div>
                <Typography variant="h4" className={s.style}>Список жителів</Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>№</TableCell>
                            <TableCell align="center">Ім'я</TableCell>
                            <TableCell align="center">Присутні дні</TableCell>
                            <TableCell align="center">Сума за електроенергію</TableCell>
                            <TableCell align="center">CONST</TableCell>
                            <TableCell align="center">До оплати</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            this.props.state.users.map(row => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">{row.id}</TableCell>
                                    <TableCell align="center">{row.userName}</TableCell>
                                    <TableCell align="center">{row.daysPresent}</TableCell>
                                    <TableCell align="center">{row.priceForEnergy}</TableCell>
                                    <TableCell align="center">{row.consta}</TableCell>
                                    <TableCell align="center">{row.toPay}</TableCell>
                                    <TableCell align="center"
                                               onClick={() => this.props.editUser(row.id)}><CreateIcon/></TableCell>
                                    <TableCell align="center"
                                               onClick={() => this.props.deleteUser(row.id)}><DeleteIcon/></TableCell>
                                </TableRow>
                            ))}
                        <TableRow>
                            <TableCell colSpan={2}>Сумма днів</TableCell>
                            <TableCell align="center">{this.props.totalPresentDays}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Button variant="contained" color="primary" onClick={this.props.addUser}>Додати жителя</Button>
            </div>
        );
    }

}

export default ListOfUsers;