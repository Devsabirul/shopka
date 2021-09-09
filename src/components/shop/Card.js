import { Grid } from '@material-ui/core';
import React from 'react';

const Card = () => {
    return (
        <div className="container">
            <Grid container>
                <Grid item sm={12} md={8} lg={8}>
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="https://retaildesignblog.net/wp-content/uploads/2020/08/00_Designliga_Porsche_NOW_Retail_Design-780x520.jpg" class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="https://retaildesignblog.net/wp-content/uploads/2020/08/00_Designliga_Porsche_NOW_Retail_Design-780x520.jpg" class="img-fluid rounded-start" class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="https://retaildesignblog.net/wp-content/uploads/2020/08/00_Designliga_Porsche_NOW_Retail_Design-780x520.jpg" class="img-fluid rounded-start" class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item sm={12} md={4} lg={4}>
                    this is checout page
                </Grid>
            </Grid>

        </div>
    );
};

export default Card;