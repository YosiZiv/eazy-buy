import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { useSelector } from 'react-redux';


const useStyles = makeStyles( ( theme ) => ( {
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing( 2 ),
    },
    title: {
        flexGrow: 1,
    },
} ) );

export default function NavBar()
{
    const classes = useStyles();
    const currentUser = useSelector( ( state ) => state.auth.currentUser );


    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>

                    <Typography variant="h6" className={classes.title}>
                        EZBuy - בית לעסקים בבאר שבע
          </Typography>
                    {Object.keys( currentUser ).length === 0 &&
                        <>
                            <Button color="inherit">התחבר</Button>
                            <Button color="inherit">הירשם</Button>
                        </>
                    }
                    {Object.keys( currentUser ).length !== 0 &&
                        <>
                            <pre>{JSON.stringify( currentUser )}</pre>
                        </>
                    }

                </Toolbar>
            </AppBar>
        </div>
    );
}