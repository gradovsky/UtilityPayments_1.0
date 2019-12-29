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
import s from './ListReceipts.module.css'


class ListReceipts extends React.Component {

    render() {

        return (
            <div className={s.marginTop}>
                <Typography variant="h4" className={s.style}>Щомісячні послуги по будинку</Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>№</TableCell>
                            <TableCell align="center">Центральне опалення<br/>грн.</TableCell>
                            <TableCell align="center">Утримання будинку<br/>грн.</TableCell>
                            <TableCell align="center">Вода<br/>грн.</TableCell>
                            <TableCell align="center">Прибирання<br/>грн.</TableCell>
                            <TableCell align="center">Інтернет<br/>грн.</TableCell>
                            <TableCell align="center">Засоби для прибирання<br/>грн.</TableCell>
                            <TableCell align="center">Загальна сумма<br/>грн.</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            this.props.state.receipt.map(row => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">{row.id}</TableCell>
                                    <TableCell align="center">{row.centralHeating}</TableCell>
                                    <TableCell align="center">{row.keepingTheBuilding}</TableCell>
                                    <TableCell align="center">{row.water}</TableCell>
                                    <TableCell align="center">{row.cleaning}</TableCell>
                                    <TableCell align="center">{row.internet}</TableCell>
                                    <TableCell align="center">{row.cleaningProducts}</TableCell>
                                    <TableCell align="center">{row.totalAmount}</TableCell>
                                    <TableCell align="center"
                                               onClick={() => this.props.editReceipt(row.id)}><CreateIcon/></TableCell>
                                    <TableCell align="center"
                                               onClick={() => this.props.deleteReceipt(row.id)}><DeleteIcon/></TableCell>

                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
                <Button variant="contained" color="primary" onClick={this.props.addExpense}>Додати витрати</Button>
            </div>
        );
    }

}



export default ListReceipts;