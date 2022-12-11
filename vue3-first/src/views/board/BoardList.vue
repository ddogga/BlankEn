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
                    <ul class="dropdown-menu" v-on:click.stop="doThis">
                        <li class="dropdown-item"><input type="checkbox"><label>a</label></li>
                        <li class="dropdown-item"><input type="checkbox"><label>w</label></li>
                        <li class="dropdown-item"><input type="checkbox"><label>e</label></li>
                        <li class="dropdown-item"><input type="checkbox"><label>r</label></li>
                        <li class="dropdown-item"><input type="checkbox"><label>s</label></li>
                    </ul>
                </div>
            </div>

            <div
            class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
            >
                <select name="cars" id="cars" multiple multiselect-hide-x="true">
                    <option value="1">Audi</option>
                    <option selected value="2">BMW</option>
                    <option selected value="3">Mercedes</option>
                    <option value="4">Volvo</option>
                    <option value="5">Lexus</option>
                    <option value="6">Tesla</option>
                </select>
            
            
            </div>
            




            <div
            class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
            >
                <table>
                    <caption>Developers Rating</caption>
                    <thead>
                        <tr>
                            <th>상태</th>
                            <th colspan="2">제목</th>
                            <th>문제수</th>
                            <th>카테고리</th>
                            <th>추천수</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowspan="2"><sapn
                            class="badge bg-success text-white"
                            >완료</sapn></td>
                            <td>제목</td>
                            <td rowspan="2">버튼</td>
                            <td rowspan="2">David</td>
                            <td rowspan="2">180</td>
                            <td rowspan="2">
                                <button class="view">view</button>
                                <button class="delete">Delete</button>
                            </td>
                        </tr>

                        <tr>
                            <td>아이디</td>
                        </tr>


                        <tr>
                            <td rowspan="2"><sapn
                            class="badge bg-secondary text-white"
                            >진행중</sapn></td>
                            <td>제목</td>
                            <td rowspan="2">버튼</td>
                            <td rowspan="2">David</td>
                            <td rowspan="2">180</td>
                            <td rowspan="2">
                                <button class="view">view</button>
                                <button class="delete">Delete</button>
                            </td>
                        </tr>

                        <tr>
                            <td>아이디</td>
                        </tr>


                        <tr>
                            <td rowspan="2"><sapn
                            class="badge bg-secondary text-white"
                            >진행중</sapn></td>
                            <td>제목</td>
                            <td rowspan="2">버튼</td>
                            <td rowspan="2">David</td>
                            <td rowspan="2">180</td>
                            <td rowspan="2">
                                <button class="view">view</button>
                                <button class="delete">Delete</button>
                            </td>
                        </tr>

                        <tr>
                            <td>아이디</td>
                        </tr>

                                                <tr>
                            <td rowspan="2"><sapn
                            class="badge bg-secondary text-white"
                            >진행중</sapn></td>
                            <td>제목</td>
                            <td rowspan="2">버튼</td>
                            <td rowspan="2">David</td>
                            <td rowspan="2">180</td>
                            <td rowspan="2">
                                <button class="view">view</button>
                                <button class="delete">Delete</button>
                            </td>
                        </tr>

                        <tr>
                            <td>아이디</td>
                        </tr>


                        <tr>
                            <td rowspan="2"><sapn
                            class="badge bg-secondary text-white"
                            >진행중</sapn></td>
                            <td>제목</td>
                            <td rowspan="2">버튼</td>
                            <td rowspan="2">David</td>
                            <td rowspan="2">180</td>
                            <td rowspan="2">
                                <button class="view">view</button>
                                <button class="delete">Delete</button>
                            </td>
                        </tr>

                        <tr>
                            <td>아이디</td>
                        </tr>

                                                <tr>
                            <td rowspan="2"><sapn
                            class="badge bg-secondary text-white"
                            >진행중</sapn></td>
                            <td>제목</td>
                            <td rowspan="2">버튼</td>
                            <td rowspan="2">David</td>
                            <td rowspan="2">180</td>
                            <td rowspan="2">
                                <button class="view">view</button>
                                <button class="delete">Delete</button>
                            </td>
                        </tr>

                        <tr>
                            <td>아이디</td>
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

<script>

    export default {
        setup() {

        },
    }
</script>



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
/* .dropdown-menu {margin-top: 10px;}
.dropdown-menu li {margin-bottom: 15px;}
.dropdown-menu li input[type="checkbox"] {display: none;}
.dropdown-menu li input[type="checkbox"] + label { width:17px; height: 17px; background: #fa3062; cursor: pointer; border-radius: 3px;float: right;}
.dropdown-menu li input[type="checkbox"]:checked + label {background:url(../../assets/images/check.png) #fa3062 no-repeat center/10px 10px; float: right}
.dropdown-menu li input[type="checkbox"] + label span {position: absolute; left:0px; display: block; } */




</style>