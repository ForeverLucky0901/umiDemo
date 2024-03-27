import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css'
import { Link } from 'umi';
import { Table, Pagination, Popconfirm, Button, Checkbox, Form, Input, FormIte } from 'antd';
import UserModal from './Modal';
import { fetch } from './service';
import styles from './index.less';
function TableListComponent() {
  useEffect(() => {
    // 组件挂载完成后（相当于 componentDidMount）执行此回调
    pageChangeHandler(1); // 初始化时调用 pageChangeHandler，并传入初始页码
  }, []);

  function pageChangeHandler(page) {
    fetch({
      page: page,
      inputName: inputName,
      inputEmail: inputEmail,
      inputWebsite: inputName,
    }).then(res => {
      console.log(res, '');
      setDataSource(res.dataSource);
      setTotal(res.total);
    });
  }

  let [dataSource, setDataSource] = useState([]);
  let [total, setTotal] = useState(0);

  let columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Website',
      dataIndex: 'website',
      key: 'website',
    },

  ];
  const [value, setValue] = useState({
    name: "张三",
    age: 18,
    list: [
      {
        middle: "20",
        tizhong: 80,
      },
    ]
  });
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputWebsite, setInputWebsite] = useState('');
  const handleNameChange = event => {
    setInputName(event.target.value);
    if (inputName === '') {
      pageChangeHandler(1);
    }
  };
  const handleEmailChange = event => {
    setInputEmail(event.target.value);
    if (inputEmail === '') {
      pageChangeHandler(1);
    }
  };
  const handleWebsiteChange = event => {
    setInputWebsite(event.target.value);
    if (inputWebsite === '') {
      pageChangeHandler(1);
    }
  };
  return (
    <>
      <div className={styles.contentBox}>
        <div className={styles.nav}>
          <div className={styles.nav}>
            <span className={styles.mr}>Name:</span>
            <Input placeholder="Basic usage" value={inputName} onChange={handleNameChange} />
          </div>
          <div className={styles.nav}>
            <span className={styles.mr}>Email:</span>
            <Input placeholder="Basic usage" value={inputEmail} onChange={handleEmailChange} />
          </div>
          <div className={styles.nav}>
            <span className={styles.mr}>Website:</span>{' '}
            <Input placeholder="Basic usage" onChange={handleWebsiteChange} value={inputWebsite} />
            <div>
              <Button onClick={() => pageChangeHandler(1)}>search</Button>
            </div>
          </div>
        </div>
        <Table columns={columns} dataSource={dataSource} pagination={false} />
        <Pagination
          className="ant-table-pagination"
          defaultCurrent={1}
          total={total}
          onChange={val => {
            pageChangeHandler(val);
          }}
        />
      </div>

    </>

  );
}
// function mapStateToProps(state) {
//   const {  page } = state.users;
//   return {
//     page,
//   };
// }

export default TableListComponent