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
import s from './ListExpenses.module.css'
import Container from "@material-ui/core/Container";


class ListExpenses extends React.Component {

    render() {
        return (
            <Container maxWidth='lg' className={s.style}>
                <Typography variant="h4" className={s.text}>БУДИНКОВІ ВИТРАТИ</Typography>
                <Table>
                    <TableHead>
                        <TableRow>

                            {/*<TableCell>№</TableCell>*/}
                            <TableCell align="center">Центральне опалення<br/>грн.</TableCell>
                            <TableCell align="center">Утримання будинку<br/>грн.</TableCell>
                            <TableCell align="center">Вода<br/>грн.</TableCell>
                            <TableCell align="center">Прибирання<br/>грн.</TableCell>
                            <TableCell align="center">Інтернет<br/>грн.</TableCell>
                            <TableCell align="center">Засоби для прибирання<br/>грн.</TableCell>
                            <TableCell align="center"><b>Загальна сумма<br/>грн.</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            this.props.state.expenses.map(row => (
                                <TableRow key={row.id}>
                                    {/*<TableCell component="th" scope="row">{row.id}</TableCell>*/}
                                    <TableCell align="center">{row.centralHeating}</TableCell>
                                    <TableCell align="center">{row.keepingTheBuilding}</TableCell>
                                    <TableCell align="center">{row.water}</TableCell>
                                    <TableCell align="center">{row.cleaning}</TableCell>
                                    <TableCell align="center">{row.internet}</TableCell>
                                    <TableCell align="center">{row.cleaningProducts}</TableCell>
                                    <TableCell align="center"><b>{row.totalExpenses}</b></TableCell>
                                    <TableCell align="center"
                                               onClick={() => this.props.editExpense(row.id)}><CreateIcon/></TableCell>
                                    <TableCell align="center"
                                               onClick={() => this.props.deleteExpense(row.id)}><DeleteIcon/></TableCell>

                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
                <div className={s.centerBtn}>
                    {
                        this.props.state.expenses.length === 0
                            ?
                            <Button onClick={this.props.addExpense} size="large" variant="text" color="primary">Додати
                                показник</Button>
                            :
                            <Button disabled='true' onClick={this.props.addExpense} size="large" variant="text"
                                    color="primary">Додати показник</Button>
                    }
                </div>
            </Container>
        );
    }

}

export default ListExpenses;