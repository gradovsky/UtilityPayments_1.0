import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import s from './ListOfUsers.module.css'


class ListOfUsers extends React.Component {


    render() {

        return (
            <div className={s.marginTop}>
                <Typography variant="h4" className={s.style}>Резиденти</Typography>
                <Button variant="contained" color="primary" onClick={this.props.addCalculations}>Розрахунки</Button>
                <p><Button variant="contained" color="primary" onClick={this.props.addUser}>Додати резидента</Button></p>

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
                    </TableBody>
                </Table>

            </div>
        );
    }

}


export default ListOfUsers;