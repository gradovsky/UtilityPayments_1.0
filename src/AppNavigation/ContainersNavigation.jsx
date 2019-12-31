import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ListOfUsersContainer from "../Components/UsersComponents/ListOfUsers/ListOfUsersContainer";
import ListEnergyContainer from "../Components/EnergyComponents/ListEnergy/ListEnergyContainer";
import ListExpensesContainer from "../Components/ExpensesComponents/ListExpenses/ListExpensesContainer";


function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <Typography component="div"
                    role="tabpanel"
                    hidden={value !== index}
                    id={`nav-tabpanel-${index}`}
                    aria-labelledby={`nav-tab-${index}`}
                    {...other}>
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>

    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

function LinkTab(props) {
    return (
        <Tab component="a" onClick={event => {
            event.preventDefault()
        }} {...props}/>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));


export default function NavTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="nav tabs example">
                    <LinkTab label="Список жителів" href="/users" {...a11yProps(0)} />
                    <LinkTab label="Електроенергія" href="/energy" {...a11yProps(1)} />
                    <LinkTab label="Комунальні витрати" href="/expenses" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <ListOfUsersContainer href="/users" history={props.history}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ListEnergyContainer history={props.history}/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <ListExpensesContainer history={props.history}/>
            </TabPanel>
        </div>
    );
}