const dataSource = [
  {
    id: "310000198108226714",
    email: "t.iuofgv@kdaytcvi.be",
    name: "1",
    website: "议必标约标养数须备又处变克做本选。",
    operation: "@operation",
    age: 25,
  },
  {
    id: "510000199802232358",
    email: "x.vmlnyh@lmqnfegyh.ee",
    name: "2",
    website: "议必标约标养数须备又处变克做本选。",
    operation: "@operation",
    age: 30,
  },
  {
    id: "220000197108319287",
    email: "f.ior@yjdl.dk",
    name: "Brian Jackson",
    website: "议必标约标养数须备又处变克做本选。",
    operation: "@operation",
    age: 29,
  },
  {
    id: "320000198503068914",
    email: "m.ypomruirwj@sopshz.dk",
    name: "David Perez",
    website: "议必标约标养数须备又处变克做本选。",
    operation: "@operation",
    age: 20,
  },
  {
    id: "820000199508062370",
    email: "j.ctgtdjss@lgndh.mq",
    name: "Betty Jasdasdasdackson",
    website: "议必标约标养数须备又处变克做本选。",
    operation: "@operation",
    age: 32,
  },
  {
    id: "820000199508062370",
    email: "j.ctgtdjss@lgndh.mq",
    name: "Betty Jacasdsadasdkson",
    website: "议必标约标养数须备又处变克做本选。",
    operation: "@operation",
    age: 32,
  },
  {
    id: "820000199508062370",
    email: "j.ctgtdjss@lgndh.mq",
    name: "Betty Jaasdasdawdwackson",
    website: "议必标约标养数须备又处变克做本选。",
    operation: "@operation",
    age: 32,
  },
  {
    id: "820000199508062370",
    email: "j.ctgtdjss@lgndh.mq",
    name: "Betty dawdawdawdwaJackson",
    website: "议必标约标养数须备又处变克做本选。",
    operation: "@operation",
    age: 32,
  },
  {
    id: "820000199508062370",
    email: "j.ctgtdjss@lgndh.mq",
    name: "Betty Jawdawdawdawdackson",
    website: "议必标约标养数须备又处变克做本选。",
    operation: "@operation",
    age: 32,
  },
  {
    id: "820000199508062370",
    email: "j.ctgtdjss@lgndh.mq",
    name: "Betty Jdawdawdawdawackson",
    website: "议必标约标养数须备又处变克做本选。",
    operation: "@operation",
    age: 32,
  },
  {
    id: "820000199508062370",
    email: "j.ctgtdjss@lgndh.mq",
    name: "Bettyawdwadawdawd Jackson",
    website: "议必标约标养数须备又处变克做本选。",
    operation: "@operation",
    age: 32,
  },
  {
    id: "820000199508062370",
    email: "j.ctgtdjss@lgndh.mq",
    name: "Bettydawdawdwadawd Jackson",
    website: "议必标约标养数须备又处变克做本选。",
    operation: "@operation",
    age: 32,
  },
  {
    id: "820000199508062370",
    email: "j.ctgtdjss@lgndh.mq",
    name: "Bettydawefsfgnhgrgfegdh Jackson",
    website: "议必标约标养数须备又处变克做本选。",
    operation: "@operation",
    age: 32,
  },
  {
    id: "820000199508062370",
    email: "j.ctgtdjss@lgndh.mq",
    name: "Bettywesrgdgerwesghgnrtr3qgthd Jackson",
    website: "议必标约标养数须备又处变克做本选。",
    operation: "@operation",
    age: 32,
  },
  {
    id: "820000199508062370",
    email: "j.ctgtdjss@lgndh.mq",
    name: "Betty fwegrfrefwgrgfegefwJackson",
    website: "议必标约标养数须备又处变克做本选。",
    operation: "@operation",
    age: 32,
  },
  {
    id: "820000199508062370",
    email: "j.ctgtdjss@lgndh.mq",
    name: "Bettywqgrgefgrdgwrdbrg Jackson",
    website: "议必标约标养数须备又处变克做本选。",
    operation: "@operation",
    age: 32,
  },
  {
    id: "820000199508062370",
    email: "j.ctgtdjss@lgndh.mq",
    name: "Bettydfwergegrefwgrferg Jackson",
    website: "议必标约标养数须备又处变克做本选。",
    operation: "@operation",
    age: 32,
  },
  {
    id: "820000199508062370",
    email: "j.ctgtdjss@lgndh.mq",
    name: "Betty wqewfgefrggfrefwrgdJackson",
    website: "议必标约标养数须备又处变克做本选。",
    operation: "@operation",
    age: 32,
  },
  {
    id: "820000199508062370",
    email: "j.ctgtdjss@lgndh.mq",
    name: "Betty wqferggfrefrgdbJackson",
    website: "议必标约标sjkfhajs养数须备又处变克做本选。",
    operation: "@operation",
    age: 32,
  },
  {
    id: "820000199508062370",
    email: "j.ctgtdjss@lgndh.mq",
    name: "Betty Jackson",
    website: "议必标约标养数须备又处变克做本选。",
    operation: "@operation",
    age: 32,
  },
  {
    id: "820000199508062370",
    email: "j.ctgtdjss@lgndh.mq",
    name: "Betty Jackson",
    website: "议必标约标养数须备又处变克做本选。",
    operation: "@operation",
    age: 32,
  },
  {
    id: "820000199508062370",
    email: "j.ctgtdjss@lgndh.mq",
    name: "Betty Jackson",
    website: "议必标约标养数须备又处变克做本选。",
    operation: "@operation",
    age: 32,
  },
];
export function fetch(obj) {
  let { page, inputEmail, inputName, inputWebsite } = obj;

  // 使用原始数据源创建一个新的数组用于存储过滤后的结果
  let filteredDataSource = [...dataSource];

  // 根据输入条件依次过滤
  if (inputEmail) {
    filteredDataSource = filteredDataSource.filter((item) =>
      item.email.includes(inputEmail)
    );
  }
  if (inputName) {
    filteredDataSource = filteredDataSource.filter((item) =>
      item.name.toLowerCase().includes(inputName.toLowerCase())
    );
  }
  if (inputWebsite) {
    filteredDataSource = filteredDataSource.filter((item) =>
      item.website.includes(inputWebsite)
    );
  }

  // 如果有多个检索条件，可以同时满足（逻辑与关系）
  // 下面的示例假设需要同时满足inputEmail和inputName条件
  if (inputEmail && inputName) {
    filteredDataSource = filteredDataSource.filter(
      (item) =>
        item.email.includes(inputEmail) &&
        item.name.toLowerCase().includes(inputName.toLowerCase())
    );
  }

  // 或者如果有多个检索条件，但只需要满足其中一个（逻辑或关系）
  // 可以通过数组的flatMap结合filter实现
  // 下面的示例假设只要满足inputEmail或inputName中的任意一个条件即可
  if (inputEmail || inputName) {
    filteredDataSource = dataSource.flatMap((item) => {
      if (inputEmail && item.email.includes(inputEmail)) {
        return [item];
      }
      if (
        inputName &&
        item.name.toLowerCase().includes(inputName.toLowerCase())
      ) {
        return [item];
      }
      return [];
    });
  }

  // 获取分页数据
  const startIndex = (page - 1) * 10;
  const endIndex = Math.min(startIndex + 10, filteredDataSource.length);

  // 返回Promise对象，其中包含过滤并分页后的数据以及总数据量
  return new Promise((resolve, reject) => {
    resolve({
      dataSource: filteredDataSource.slice(startIndex, endIndex),
      total: filteredDataSource.length,
    });
  });
}
