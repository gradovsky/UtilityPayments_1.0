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
import s from './ListEnergy.module.css'


class ListEnergy extends React.Component {


    render() {

        return (
            <div className={s.marginTop}>
                <Typography variant="h4" className={s.style}>Розрахунок за електроенергію</Typography>
                <Button variant="contained" color="primary" onClick={this.props.addEnergy}>Додати показник</Button>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>№</TableCell>
                            <TableCell align="center">Поточний <p>показник</p></TableCell>
                            <TableCell align="center">Останній <p>показник</p></TableCell>
                            <TableCell align="center">Спожито <p>кВт</p></TableCell>
                            <TableCell align="center">Сума<p>(кВт*1.68)</p></TableCell>
                            <TableCell align="center">Кількість днів <p>в місяці</p></TableCell>
                            <TableCell align="center">Ціна енергії <p>за 1 день</p></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            this.props.state.energy.map(row => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">{row.id}</TableCell>
                                    <TableCell align="center">{row.currentValue}</TableCell>
                                    <TableCell align="center">{row.lastValue}</TableCell>
                                    <TableCell align="center">{row.energyUsedKw}</TableCell>
                                    <TableCell align="center">{row.energyPrice}</TableCell>
                                    <TableCell align="center">{row.countDaysInMonth}</TableCell>
                                    <TableCell align="center">{row.energyPriceOneDay}</TableCell>
                                    <TableCell align="center"
                                               onClick={() => this.props.editEnergy(row.id)}><CreateIcon/></TableCell>
                                    <TableCell align="center"
                                               onClick={() => this.props.deleteEnergy(row.id)}><DeleteIcon/></TableCell>

                                </TableRow>
                            ))}
                    </TableBody>
                </Table>

            </div>
        );
    }

}



export default ListEnergy;