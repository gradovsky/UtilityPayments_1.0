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
import {Container} from "@material-ui/core";

class ListOfUsers extends React.Component {

    render() {
        let energyPriceOneDay = this.props.energyPrice / this.props.totalPresentDays;
        return (
            <Container maxWidth='lg' className={s.style}>
                <Typography variant="h4" className={s.text}>СПИСОК ЖИТЕЛІВ</Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Ім'я</TableCell>
                            <TableCell align="center">Присутні дні</TableCell>
                            <TableCell align="center">Сума за електроенергію</TableCell>
                            <TableCell align="center">Комунальні витрати</TableCell>
                            <TableCell align="center">До оплати</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            this.props.state.users.map(row => (
                                <TableRow key={row.id}>
                                    <TableCell align="center">{row.userName}</TableCell>
                                    <TableCell align="center">{row.daysPresent}</TableCell>

                                    <TableCell
                                        align="center">{(energyPriceOneDay * row.daysPresent).toFixed(2)}</TableCell>

                                    <TableCell
                                        align="center">{(this.props.totalExpenses / this.props.state.users.length).toFixed(2)}</TableCell>

                                    <TableCell
                                        align="center">{(+(energyPriceOneDay * row.daysPresent) + +(this.props.totalExpenses / this.props.state.users.length)).toFixed(2)}</TableCell>

                                    <TableCell align="center"
                                               onClick={() => this.props.editUser(row.id)}><CreateIcon
                                        fontSize="small"/></TableCell>
                                    <TableCell align="center"
                                               onClick={() => this.props.deleteUser(row.id)}><DeleteIcon
                                        fontSize="small"/></TableCell>
                                </TableRow>
                            ))}
                        <TableRow>
                            <TableCell colSpan={1}><strong>Сума днів</strong></TableCell>
                            <TableCell align="center"><strong>{this.props.totalPresentDays}</strong></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <div className={s.centerBtn}>
                    <Button onClick={this.props.addUser} size="large" variant="text" color="primary">Додати жителя</Button>
                </div>
            </Container>
        );
    }

}

export default ListOfUsers;