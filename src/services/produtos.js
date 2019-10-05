function handleSubmit(event) {
  event.preventDefault();
  form.validateFields((err, values) => {
    if (!err) {
      localStorage.setItem(produto.descricao, JSON.stringify(produto));
      history.push("/relatorio");
    }
  });
}

const getGroups = () => {
  return new Promise(async (resolve, reject) => {
    try {
      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = JSON.parse(localStorage.getItem(key));
      }
      let produtos = value.getAllGroup();
      resolve(groups);
    } catch (error) {
      reject(error);
    }
  });
};

const newGroup = group => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await Api.groupPostWithUsers(group);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

const deleteGroupById = id => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await Api.deleteGroup(id);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

const putGroup = group => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await Api.groupPutWithUsers(group);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

const groupService = {
  getGroups,
  newGroup,
  deleteGroupById,
  searchGroupById,
  getGroupsFromPage,
  getAvailableGroups,
  putGroup
};
export default groupService;
