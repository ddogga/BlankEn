<template>
    <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
            <div
            class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
            >
                <div class="dropdown mb-5">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown button
                    </button>
                    <ul class="dropdown-menu">
                        <li><input type="checkbox" id="a1" name="md" />
                        <label for="a1"><span>미드</span></label>
                        </li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>

            

            <div
            class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
            >


            </div>
            <div
            class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
            >
                <table>
                    <caption>Developers Rating</caption>
                    <thead>
                        <tr>
                            <th>상태</th>
                            <th>제목</th>
                            <th>문제수</th>
                            <th>카테고리</th>
                            <th>추천수</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><sapn
                            class="badge bg-success text-white"
                            >완료</sapn></td>
                            <td>Ninja</td>
                            <td>Asma Ad</td>
                            <td>120</td>
                            <td>
                                <button class="view">view</button>
                                <button class="delete">Delete</button>
                            </td>
                        </tr>

                        <tr>
                            <td><sapn
                            class="badge bg-secondary text-white"
                            >진행중</sapn></td>
                            <td>Shades</td>
                            <td>David</td>
                            <td>180</td>
                            <td>
                                <button class="view">view</button>
                                <button class="delete">Delete</button>
                            </td>
                        </tr>

                        <tr>
                            <td><sapn class="badge"></sapn></td>
                            <td>Alex</td>
                            <td>David</td>
                            <td>160</td>
                            <td>
                                <button class="view">view</button>
                                <button class="delete">Delete</button>
                            </td>
                        </tr>

                        <tr>
                            <td><sapn class="badge"></sapn></td>
                            <td>Valhala</td>
                            <td> Kawtar</td>
                            <td>190</td>
                            <td>
                                <button class="view">view</button>
                                <button class="delete">Delete</button>
                            </td>
                        </tr>

                        <tr>
                            <td><sapn class="badge"></sapn></td>
                            <td>Katara</td>
                            <td>David</td>
                            <td>110</td>
                            <td>
                                <button class="view">view</button>
                                <button class="delete">Delete</button>
                            </td>
                        </tr>

                        <tr>
                            <td><sapn class="badge bg-secondary text-white">진행중</sapn></td>
                            <td>Union</td>
                            <td>Ashraf</td>
                            <td>90</td>
                            <td>
                                <button class="view">view</button>
                                <button class="delete">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <td colspan="5" class="tablefoot"></td>
                    </tfoot>
                </table>
            </div>
        </div>
        </section>
</template>


<style scoped>
/* @import "../../assets/css/bootstrap.css"; */

/*table css */
table {
    width: 700px;
    text-align: center;
    border: 1px solid #fff;
    border-spacing: 1px;
    font-family: 'Cairo', sans-serif;
  margin: auto;
}

caption {
    font-weight: bold;
}

table td {
    padding: 10px;
    background-color: #eee;
}

table th {
    background-color: #333;
    color: #fff;
    padding: 10px;
}

img {
    width: 90px;
    height: 90px;
}

.view,
.delete {
    border: none;
    padding: 5px 10px;
    color: #fff;
    font-weight: bold;
}

.view {
    background-color: #03A9F4;
}

.delete {
    background-color: #E91E63;
}

.tablefoot {
    padding: 0;
    border-bottom: 3px solid #009688;
}

/* dropbox css */
.dropdown-menu {margin-top: 10px;}
.dropdown-menu li {margin-bottom: 15px;}
.dropdown-menu li:after {display:block; clear:both; content:"";}
.dropdown-menu li input[type="checkbox"] {display: none;}
.dropdown-menu li input[type="checkbox"] + label { width:17px; height: 17px; background: #fa3062; cursor: pointer; border-radius: 3px;float: right;}
.dropdown-menu li input[type="checkbox"]:checked + label {background:url(../../assets/images/check.png) #fa3062 no-repeat center/10px 10px; float: right}
.dropdown-menu li input[type="checkbox"] + label span {position: absolute; left:0px; display: block; }




</style>