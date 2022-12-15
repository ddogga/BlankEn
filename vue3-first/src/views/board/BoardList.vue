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
                        <li class="dropdown-item"><label>모두<input type="checkbox" v-model="selectAll" value="all" @change="all"></label></li>
                        <li class="dropdown-item"><label>드라마<input type="checkbox" v-model="selectedValues" value="드라마"></label></li>
                        <li class="dropdown-item"><label>여행<input type="checkbox" v-model="selectedValues" value="여행"></label></li>
                        <li class="dropdown-item"><label>일상회화<input type="checkbox" v-model="selectedValues" value="일상회화"></label></li>
                        <li class="dropdown-item"><label>비즈니스<input type="checkbox" v-model="selectedValues" value="비즈니스"></label></li>
                        <li class="dropdown-item"><label>오픽/토스<input type="checkbox" v-model="selectedValues" value="오픽/토스"></label></li>
                    </ul>
                </div>
            </div>

            <div
            class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
            >
                <ul class="tag-list">
                    <li class="tag-item" v-for="(item,index) in selectedValues" :key="index">
                        <sapn class="badge bg-success text-white tag" >
                            {{item}}
                        </sapn>
                    </li>
                </ul>
                
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
    import {ref} from 'vue';
    export default {
        setup() {

            const selectAll = ref(false);
            const selectedValues = ref([])


            //카테고리 전체 선택
            const all = () =>{
                if(selectAll.value){
                    selectedValues.value = ["드라마","여행","일상회화","비즈니스","오픽/토스"]
                } else{
                    selectedValues.value = [];
                }
            }

            return{
                selectAll,selectedValues,all
            }
        },
    }
</script>



<style scoped>
/* @import "../../assets/css/bootstrap.css"; */


/*검색 태그 */

.tag-list {
    list-style: none;
}
.tag-item {
    float: left;
    margin-right: 20px;
}


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