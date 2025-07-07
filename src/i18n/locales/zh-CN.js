/* eslint-disable */
// @/locales/en.js
import locale from 'element-ui/lib/locale/lang/zh-CN'
const TIMEZONE_DIC = []
const SERVICE_EMAIL = ''

export default {
  ...locale,

  lan: {
    en: '英语',
    vi: '越南语',
    abbr: 'CN'
  },
  law: {
    pr: '隐私政策',
    re: '退货和退款',
    te: '服务条款',
    sp: '运费信息',
    de: '数据删除说明'
  },
  valid: {
    email: '电子邮件',
    suffix: '是必需的',
    default: '数据',
    nf: '请填写正确的号码',
    pecd: '请正确输入数据',
    only6: '只能输入6位数字'
  },
  dic: {
    foldersList: {
      dictLabel: '所有图像'
    },
    categoryId: {
      dictLabel: '所有产品',
      dictLabel2: '所有产品'
    },
    timezone: {
      dicData: TIMEZONE_DIC,
      defaultValue: {
        label: '(GMT+00:00) UTC',
        value: 0
      }
    }
  },
  placeholder: {
    emptyTxt: '  ',
    placeholder: '输入 {key} 搜索'
  },
  validTip: {
    isMoney: '请输入正确的金额。',
    charRange: '请输入｛range｝个字符。',
    number: '',
    isInteger: '',
    intFloat: '请输入大于0的数字',
    notNFloating: '',
    money: '',
    notChinese: '',
    username: '',
    email: '请输入有效的电子邮件地址',
    passwordRobust: '密码长度必须至少为8个且不超过16个字符，包括一个大写字母、一个小写字母和一个数字。',
    confirmPassword: '密码是不同的.',
    lowerCase: '',
    telephone: '',
    alphabets: '请输入大小写字母、数字、空格或特殊字符。',
    commonCharacters: '',
    numberAndLetter: '只能输入数字字母',
    commonCharactersAndPoint: '',
    blankPassword: '',
    idNumber: '',
    notAllIsNumber: '',
    userNameProhibited: '用户名不能包含禁止使用的单词，请重置它。', //用户名违禁词
    'username2-30': '用户名必须至少为2个字符，长度不得超过30个字符。',
    charLenLimit: '请输入 {min}-{max} 个字符。'
  },

  //弹窗提示
  msg: {
    shopRegSucc: '注册成功，请使用此账号登录并授权',
    ss2: '保存成功',
    success: '成功的',
    pictureSuccess: '所有图片上传成功',
    error: '错误',
    failed: '失败',
    tips: '提示',
    notice: '提示',
    os: '操作成功',
    wait: '请稍候',
    waitTxt: '您的付款正在后台处理。 \n 不要刷新或关闭浏览器。',
    resendSuccess: '重新发送成功',
    copySuccess: '复制成功',
    copyFailed: '复制失败',
    leastOne: '请至少选择一个数据',
    leastOrder: '请至少选择一个订单',
    uploadOsSFailed: '上传OSS失败',
    textImageUploadFailed: '文本图像上传失败',
    canvasRenderError: '画布数据渲染异常， 请清除画布数据或刷新页面重新定制。',
    textTooLongOrImageTooLarge: '文本过长或图像图层过大，生成失败。',
    empty: '无数据',
    pc: '付款已完成',
    afterPay: '对不起，您正在付款，请在付款后进行操作。',
    timedOut: '请求超时',
    networkError: '网络连接错误',
    serverError: '服务器错误',
    reLogin: '重新登录',
    connectFailed: '无法连接到服务器',
    loginExpired: '登录状态已过期',
    loginNotConnected:
      '已存在具有相同电子邮件的帐户。请先使用您的电子邮件和密码登录,然后在Dashboard> Settings中连接您的社交帐户。',
    thrHasReged: '该邮箱账号已注册，请使用新的账号注册',
    dashboard: '工作台',
    homepage: '主页',
    out: '注销',
    designIdError: 'ID异常，请刷新页面并重试',
    //oss提示
    fileAbnormal: '上传文件类型异常',
    failedSignature: '获取签名失败',
    imageFailed: '图像上传失败',
    serverUrlError: 'Server Url 必须等于1',
    picNameError: '图片名称异常,存在“$1”特殊字符。',
    fiveMinutes: '请在五分钟后操作',
    shopExists: '店铺已存在',
    shopUnavailable: '对不起，这个店铺目前不可用',
    skuRepeated: '自定义sku不能重复',
    exportNoData: '暂无数据，无法导出',
    clearUp: '你确定要清除画布吗?',
    reupload: '上传图片超过200MB, 请重新上传',
    addLayerException: '网络异常，画布创建图层失败，请重新选择图片。',
    newYear: '2024年农历新年放假通知',
    login: '请先登录系统'
  },

  // 通用
  // $t('com.')
  com: {
    noInfo: '该分类下暂无信息',
    ref: '刷新',
    edit: '编辑',
    save: '保存',
    back: '返回',
    submit: '提交',
    del: '删除',
    cancel: '取消',
    confirm: '确定',
    return: '返回',
    pub: '发布',
    prev: '上一步',
    next2: '下一步',
    next: '下一步',
    choose: '选择',
    done: '完成',
    purchase: '购买',
    bn2: '立即购买',
    select: '选择',

    us: '美国',

    details: '详情',
    phone: '手机',
    date: '数据',
    tsy: '交易类型',
    mt: '方式',
    oID: '订单 ID',
    st: '状态',
    tn: '交易编号',
    sn: '买家流水号',
    amount: '金额',
    remark: '备注',
    total: '全部',
    subT: '小计',
    img: '画像',

    jobDesc: '平均履行时间 ${start}-${end} 工作日',

    continue: '继续',
    sku: 'Sku',
    view: '查看',
    record: '记录',

    // $t('com.addr.')
    addr: {
      o: '地址'
    },
    tLabel: {
      oCode: '订单号',
      tType: '业务类型',
      mt: '方法',
      amount: '金额',
      tNo: '交易号码',
      sNum: '序列号',
      Status: '状态',
      pr: '处理结果',
      pStatus: '付款状态',
      pMethod: '付款方式'
    },
    dicData: {
      un: '未支付',
      pa: '已支付',
      pp: '贝宝',
      cc: '取消/关闭',
      sr: '系统退款',
      paf: '支付所有费用',
      // tradeType 交易类型
      op: '支付订单', //3
      oasr: '订单售后退款', //4
      cor: '(排单中)取消订单退款', //15
      pcor: '(生产中)取消订单退款', //16
      rsr: '退货运费退款', //17
      rsp: '退货运费支付', //18
      py: '交通费用',
      po: '付款指南',
      // 充值方式
      repp: 'PayPal', // 8-paypal
      rebt: '线下转账', // 3-线下转账
      resr: '系统退款', // 9-系统退款
      // 充值状态
      reInReview: '申请已提交/审核中', // 0、申请已提交/审核中
      reSuccessed: '通过', // 1、通过
      reReviewFailed: '不通过/拒绝', //2，不通过/拒绝

      //提现 交易状态 approveStatus
      ir: '审核中', // 0  审核中
      ss: '成功', // 1 成功
      rf: '审核拒绝', // 2 审核拒绝
      ps: '部分成功', //3.部分成功
      failed: '失败', // 4.失败

      workOrderType: {
        pro: '产品',
        order: '订单',
        log: '物流',
        cus: '定制',
        store: '店铺',
        ff: '功能反馈',
        other: '其他'
      }
    },
    submito: {
      success: '提交成功'
    },
    directions: '操作指南'
  },

  column: {
    username: '用户名',
    email: '电子邮件',
    password: '密码',
    confirmPassword: '确认密码',
    fullName: '全部名称',
    code: '验证码'
  },

  //公共组件
  base: {
    upload: {
      describe: '添加订单数据文件',
      desc: '最少超过1MB'
    },
    folder: {
      placeholder: '请选择文件夹',
      default: '默认保存位置',
      tools: '管理文件夹',
      create: '创建新文件夹',
      defaultText: '默认',
      edit: '编辑',
      remove: '去除',
      add: '添加子文件夹'
    },
    msg: {
      title: {
        info: '提示',
        warn: '提示',
        suc: '提示',
        err: '提示',
        conf: '确认选择?'
      },
      suc: '操作成功',
      delTxt: '是否确实要删除行数据?',
      copy: '复制',
      copy1: '复制'
    },
    form: {
      select: '应选择',
      require: '是必需的'
    },
    step: {
      first: '连接您的在线商店',
      second: '设计产品并将产品同步添加到商店',
      third: '销售成功后，我们将同步接收订单',
      four: '我们生产并向客户发送您的产品'
    },
    download: {
      title: '下载实体模型',
      proNum: '产品数量：',
      mockNum: '实体模型数量：',
      mockDim: '模型尺寸：'
    },
    transactionPwd: {
      tPwd: '请输入您的交易密码',
      rPwd: '密码必填',
      fPwd: '忘记交易密码？',

      t: '更改交易密码',
      psp: '请设置您的交易密码',
      cp: '确认密码',
      cpRepeat: '密码不一致',
      verify: {
        t: '请输入电子邮件验证码',
        d: '我们已将您的验证码发送至{email}。',
        d1: '请填写验证码，点击“继续”重置交易密码。',
        d2: '如果您没有看到，请检查垃圾邮件或',
        b: '重新发送',
        s: '重发成功',
        empty: '请输入验证码',
        ss: '设置成功，请重新启动支付',
        sb: '确定'
      }
    },
    shipping: {
      ss: '标准运输',
      es: '快递运输',
      es2: '快递运输 *买方负责清关和关税',
      at: '空运',
      st: '海运',
      sf: '运费',
      bi: '基本运费',
      ras: '偏远地区附加费',
      ml: '修改物流',
      osq: '获取运费报价',
      cq: '取消报价',
      afq: '申请报价',
      reminder: {
        title: '提示',
        msg1: '提交以获取运费报价',
        addressMsg: '在审核期间不能更改新的收货地址'
      },
      cancelReminder: {
        msg1: '确认取消？',
        msg2: '现在的报价将会丢失。'
      },
      submit: {
        successBtn: '查看订单详情'
      },
      odr: {
        w: '批发单',
        tip: '对于批发订单，你需要申请运费报价。'
      },
      tip: {
        1: '我们的业务人员将与您联系。',
        2: '工作人员上传订单运费后，我们会通过邮件通知您。'
      },
      // $t('base.shipping.review.')
      review: {
        ir: '审核中',
        ir2: '审核中',
        tip: '等待航运报价。'
      },
      // $t('base.shipping.addr.')
      addr: {
        title: '修改地址',
        subTitle: '新的收货地址',
        osa: '旧收货地址',
        nsa: '新的收货地址',
        ma: '修改地址的机会：',
        mac: '修改地址的机会： {count}',
        fa: '填写地址',
        reminder: '确认修改地址',
        suc: '你的地址被修改了。',
        reviewTip: '在航运审查下修改地址',
        confirmTip: '请确认修改地址',
        recordBtn: '地址已修改'
      },
      // $t('base.shipping.bill.')
      bill: {
        title: '修改收货地址单',
        pending: '等待平台审查新地址的运费',
        pay: '你需要支付',
        refund: '退还运费',
        nopay: '无需退款或补充运费。',
        rm: '退款方式'
      },
      // $t('base.shipping.method.')
      method: {
        chooseTip: '请选择一种运输方式',
        payment: '审核完成后选择'
      }
    }
  },
  //自定义组件
  comp: {
    crud: {
      all: '全部',
      sa: '全选',
      sd: '已选中 {count} 个',
      search: '搜索',
      reset: '重置',
      add: '重置',
      of: '属于',
      idx: '指数',
      menu: '运转',
      edit: '编辑',
      del: '删除',
      conf: '确认',
      cel: '取消',
      delTxt: '是否确实要删除行数据?',

      date: {
        start: '开始时间',
        end: '结束时间'
      }
    },
    form: {
      input: '请输入',
      select: '请选择',
      errMsg: '${This}必填'
    },
    protoCard: {
      new: '新品',
      def: '默认',
      cts: '创建时间↑',
      ctx: '创建时间↓',
      pLtH: '价格: 从低到高',
      pHtL: '价格: 从高到低',
      bestseller: '畅销',
      size: '尺码',
      productName: '产品名称',
      code: '产品编码',
      size1: '尺码:',
      resolution: '分辨率:'
    },
    uploadProShow: {
      addImage: '添加图像',
      tip: '最大200MB (PG,JPNG,PNG)',
      loadingTxt: '正在上传...',
      modeTip: '无法上传，因为我们不接受{mode}图像模式。请尝试其他图像。',
      existTip: '图像已存在。',
      failedTip: '图像上传失败。',
      ossUploadFail: '图像上传Oss失败',
      disabledTip: '此图像已被禁用。请尝试上载其他图像。',
      cmykTip: '无法上传 test.jpg，因为我们不接受 CMYK。尝试另一个图像。'
    },
    uploadProgress: {
      clear: '清除',
      upload: '上传',
      succeed: '成功',
      failed: '失败'
    },
    hoverPicPopup: {
      size: '大小'
    },
    doneBtnWrapper: {
      title: '提示',
      preview: '预览',
      save: '保存',
      multipleDesign: '当前产品需要设计多种尺寸，未设计尺寸：{sizes}',
      warning: '产品的某些设计区域未完全覆盖，请仔细检查或忽略此提醒。',
      content: '自定义大小为{size}的{name}区域设计部分为空。',
      saveProduct: '保存此产品',
      readjustment: '重新调整',
      proShow: '效果图', // 效果图
      generated: '模型尚未生成。请稍后再试。',
      noPicDesign: '请添加图像设计',
      createProduct: '正在创建产品，请稍候...',
      goToProductList: '进入产品列表',
      clearUpCanvas: '清空canvas'
    },
    uploadFile: {
      loadingTxt: '正在上传...',
      slt: '请上传不超过${limit}M大小的文件',
      tlt: '请上传${accept}文件',
      notFileType: '不是{fileType}的文件的后缀',
      fileSuffixException: '{fileName}文件后缀异常，{imageInfoMime}修改为{fileType}',
      fileSuffixException1: '上传文件异常，只能采用{fileType}的格式',
      typeErr: '上传文件只能是$1格式！（请确保后缀为小写）',
      sizeErr: '上传文件大小不能超过$1MB',
      suffixErr: '$1文件后缀异常，$2已修改为$3',
      fileTypeEmptySuffixErr: '上传文件异常，只能是$1格式！',
      imageInfoEmptyErr: '$1以外文件的后缀',
      repeatFileErr: '不能重复上传',
      videoErr: '视频解析异常',
      videoFormatErr: '{fileName}的视频编码是{format}，只能上传视频编码是avc的视频，请转码后再进行此操作。'
    },
    privacyPolicy: '服务条款和隐私政策',
    recharge: {
      transfer: {
        successConfirm: {
          title: '提交成功',
          content:
            '我们将在3-15个工作日内处理您的申请。\n 您可以在充值记录中查看<a class="text-primary" href="{path}" target="{target}">充值进度</a>',
          confirmButtonText: '返回'
        }
      },
      onLine: {
        beforeJumpConfirm: {
          message: '跳转到PayPal余额页面。'
        },
        errorConfirm: {
          title: '充值失败',
          content1: '您的付款未成功处理，请返回付款页面并重试。',
          content2: '如果您有任何问题，请联系我们service@toaddit.com.',
          confirmButtonText: '返回'
        },
        successConfirm: {
          title: '充值成功',
          confirmButtonText: '返回'
        }
      }
    },
    withdrawal: {
      transfer: {
        successConfirm: {
          title: '提交成功',
          content:
            '提现流程将在 2-15 个工作日内处理。 \n 您可以在提现记录中查看 <a class="text-primary" href="{path}">提现进度。</a>',
          confirmButtonText: '返回'
        }
      }
    },
    colorSketchPicker: {
      commonColors: {
        commonColor: '常用颜色',
        selected: '已选择'
      },
      popoverColorPicker: {
        color: '颜色'
      },
      customColors: {
        customColor: '自定义颜色'
      }
    },
    feedback: {
      btn: '留言',
      desc: '如果您遇到任何与订单、发货、产品定制、售后等相关的问题，请随时给我们留言，以便我们跟进订单情况。',
      contact: '请说明联系原因',
      selectOne: '请选择一个选项',
      comment: '意见/问题',
      describe: '请您描述最重要的事实，我们尽量快速帮您解决问题',
      upload: '上传附件（最多5个）',
      email: '您的电子邮箱',
      name: '您的全称',
      leaveMessage: '留言',
      view: '查看',
      message: '留言',
      err: '附件上传失败'
    },
    commonCascade: {
      all: '全部',
      common: '常用'
    },
    allDesign: {
      designOperate: {
        selectFont: '选择字体',
        fontLoadFailed: '{name} 字体加载失败',
        textLayerEffect: '文本图层效果',
        textShadow: '文本阴影',
        margin: '边距',
        color: '颜色',
        shadowYOffset: '阴影 Y 偏移',
        shadowXOffset: '阴影 X 偏移',
        shadowBlur: '阴影模糊',
        transparentColor: '透明颜色',
        clickToPickColorInDesigner: '点击在设计器中选择颜色',
        textCurvature: '文本曲率',
        letterSpacing: '字母间距'
      }
    }
  },
  //页面
  page: {
    login: {
      title: '欢迎',
      remark: '登录并创建您的帐户，您同意附加的{policy}，谢谢',
      withEmail: '或通过电子邮件',
      account: '需要一个帐户?',
      signUp: '注册',
      forgetPassword: '忘记密码？',
      option: {
        submitText: '登录'
      }
    },

    register: {
      title: '欢迎来到ToAddit',
      remark: '单击“注册”即表示您同意添加{policy}',
      regRemark: '点击“注册”，即表示您同意“添加服务条款和隐私政策”',
      withEmail: '或通过电子邮件',
      account: '有一个帐户?',
      login: '登录',
      li: '登录',
      passwordTip: '长度至少8个且不超过16个字符，包括 \n 一个大写字母、一个小写字母和一个数字',
      msgTip: {
        agreement: '您必须同意服务条款。'
      },
      option: {
        submitText: '注册'
      },
      invite: '真诚邀请您',
      vlinkValid: '邀请链接失效'
    },

    registerVerificationCode: {
      back: '返回',
      title: '欢迎来到ToAddit',
      subTitle: '填写验证码并单击“继续”成功注册。如果您没有看到，请检查垃圾邮件邮箱或',
      account: '返回到',
      login: '登录',
      successAlert: '为了帐户安全，我们已向您的邮箱发送了验证电子邮件{email}.',
      link: '设置>帐户',
      warningAlert: '为了账户安全，请及时补充您的账户信息和账户密码。',
      successTip: '单击电子邮件中的链接以重置密码。如果您没有看到电子邮件，请检查您的垃圾邮件文件夹。',
      resend: '重新发送',
      option: {
        submitText: '继续'
      }
    },

    forgetPassword: {
      title: '重置密码',
      subTitle: '我们将通过电子邮件向您发送重置密码的说明。这可能需要几分钟！',
      account: '返回到',
      login: '登录',
      successAlert: '我们刚刚向发送了一封带有密码重置说明的电子邮件{email}',
      successTip: '单击电子邮件中的链接以重置密码。如果您没有看到电子邮件，请检查您的垃圾邮件文件夹。',
      resend: '重新发送验证邮件',
      msgTip: {},
      option: {
        submitText: '重置密码'
      }
    },

    forgetPasswordVerificationCode: {
      title: '欢迎来到ToAddit',
      subTitle: '填写验证码并单击“继续”成功注册。如果您没有看到，请检查垃圾邮件邮箱或',
      account: '返回到',
      login: '登录',
      successAlert: '为了帐户安全，我们已向您的邮箱发送了验证电子邮件{email}.',
      successTip: '单击电子邮件中的链接以重置密码。如果您没有看到电子邮件，请检查您的垃圾邮件文件夹。',
      resend: '重新发送',

      option: {
        submitText: '继续'
      }
    },

    changePassword: {
      title: '更改密码',
      subTitle: '电子邮件：',
      account: '返回到',
      login: '登录',
      option: {
        submitText: '继续'
      }
    },

    // $t('page.odr.')
    odr: {
      all: '全部订单',
      notSynced: '未同步',
      unpaid: '未支付',
      toBePaid: '待支付',
      toBePaid12: '待支付费用',
      awaitingProduction: '等待生产',
      inProduction: '生产中',
      inProduction2: '生产中',
      shipped: '装船',
      delivered: '交付',
      completed: '完整的',
      canceled: '取消',
      returned: '回来',
      afterSales: '有争议',
      failed: '失败',
      ref: '退款',
      pack: '包裹${index}',
      desc: {
        notSynced: '你 (账户:${userName}) 创建了一个订单，等待您同步产品。',
        unpaid: '你 (账户:${userName}) 已同步完成产品，正在等待支付订单。',
        unpaid1: '你 (账户:${userName}) 创建订单并等待付款确认。',
        toBePaid: '您的付款尚未完成。请在24小时内付款',
        toBePaid_echeckStatus:{
          1:'您的付款尚未完成。请在24小时内付款。（电子支票，待确认）',
        },
        awaitingProduction: '您已完成订单付款，订单将在平台审核后发送给制造商。',
        inProduction: '制造商已收到订单并正在生产。',
        shipped: '您的订单已包装好并附有物流单。它正在等待收集。',
        delivered: '您的订单包已到达。',
        completed: '您的订单已完成。',
        canceled: '你取消了订单。',
        canceled_echeckStatus: {
          3: '电子支票，已取消。'
        },
        returned: '您已提交退货地址以退货。',
        afterSales: '您已申请退款，退款申请已提交给平台处理。',
        failed: `你的付款不正常。请再次付款或联系客户服务支持以解决此问题-${SERVICE_EMAIL}`
      },
      msg: {
        backTxt: '返回订单列表',
        id: '图片被禁用',
        pr: '此产品已被删除',
        pu: '由于我们已经修改了此产品的打印模板，请创建新项目并替换最初关联的产品，以避免最终产品出现问题，因此无法订购无效项目。',
        prt: '请在删除删除的产品后再次尝试付款',
        pi: '订单中有无效产品，请删除该产品并重新付款',
        psd: '订单未选择发货方式',

        nls: '没有选择物流。',

        payErr: '成功创建订单，付款异常。',
        payAgain: '请重新支付订单。'
      },
      // $t('page.odr.dia.afterSales.')
      dia: {
        afterSales: {
          title: '售后服务',
          btn: '退款申请',
          o: '售后订单',
          t: '申请时间',
          imgDesc: '请上传受损产品的图片作为证据，以便我们处理您的退款请求。'
        }
      },
      valid: {
        err: '请更改订单信息并重新上传。',
        orderCode: '订单号 ${orderCode} 对应于 ${list} 多个 ${key}',
        oe: '订单号不能为空',
        of: '订单号仅支持英文、数字和连字符，且不超过27个字符。',
        se: '请填写SKU',
        sf: 'SKU不能超过64个字符',
        qe: '数量不能为空',
        fe: '全名不能为空',
        pe: '电话号码不能为空',
        ee: '请填写运输方式',
        ef: '请填写标准发货或快递',
        ce: '国家/地区不能为空',
        cf: '请填写正确的国家/地区',
        spe: '州/省/地区不能为空',
        citye: '城市不能为空',
        ze: '邮政编码不能为空',
        ae: '地址不能为空',
        ue: '上传的文件数据为空'
      },

      rod: '刷新订单数据',
      co: '创建订单',
      oi: '订单导入',
      io: {
        btn: '导入订单',
        title: '从电子表格中导入订单',
        up: {
          t: '添加文件',
          d: '支持小于1MB的txt、xls文件导入'
        },
        suc: '将创建{total}订单。您可以单击该按钮提交数据。',
        err: '将创建{total}订单。{failCount}订单有一些问题。检查文件中的这些单元格'
      },
      oc: '证实',
      Rel: '相关的',
      sync: '同步',
      pro: {
        s: '已同步',
        nss: '未同步SKU',
        ti: 'ToAddit 项目',

        pr: '产品已删除',
        empty: '无订单产品',

        syncTip: '选择要关联的产品',
        rd: '无效的',

        ignore: {
          t: '忽略产品',
          c1: '确认忽略产品变体?',
          c2: '这个产品以后不会再同步了',
          c3: '在其他订单中忽略这个产品',
          tips: '提示：除正在办理运费申请并已完成运费申请的订单外。'
        }
      },
      prodS: {
        btnText: '生产状态',
        title: '生产进度',
        pi: '产品信息',
        pc: '款式',
        s: '尺码',
        sku: 'sku',
        ftn: '工厂单号'
      },

      echeckStatus:{
        ec:'电子支票',
        tbc: '待确认',
        complete: '完成',
        cancelled: '已取消'
      },

      ps: '个人店铺',
      nps: '还没有个人店铺？',
      ah: '去添加',

      ca: '自动取消',
      eod: '外部订单号:',
      mo: '手工订单',
      po: '个人订单',

      ct: '支付',
      tax: '税',
      newTax: '新税费',
      sd: '运费优惠',
      pd: '产品优惠',

      ss: '请选择店铺类型',
      eop: '输入订单id或产品sku',
      eeon: '请输入外部订单号',
      customer: '请输入客户名称',
      waybill: '请输入运单号',
      waybillInfo: '物流信息',

      to: 'ToAddit订单号',
      o: '订单号',
      o0: '订单',
      os: '订单',
      os0: '订单',
      wos: '批发单',
      ois: '订单项目',
      or2: '订单审核',
      pi2: '产品信息',
      oS: '订单状态',

      ship: '航运',
      ss2: '标准运输',
      es2: '特快运输',
      sm2: '运输方法',
      sms2: '运输方法',
      sa2: '运输地址',
      wng: '未生成运单号',
      ml: '修改物流',
      ssm: '选择运输方法',
      sf: '运费',
      l: '物流',
      nsr: '无物流结果',
      nss: '不支持标准运输',
      nes: '不支持特快运输',

      sot: '订单模板示例.xls',
      acc: 'Alpha-2国家/地区代码.xls',
      oii12: '订单导入简介',

      upq: '上传产品数量',
      pas: '导入成功',
      uti: '导入失败',
      return: {
        send: '将货物交付至指定地址',
        ra: '返回地址',
        tip: '生产中产品的费用不可退还，运费将在一个工作日内退还到您的账户（退款运费：$${freight}）',
        rejTip:
          '阅读它 ↓' +
          '<br/>' +
          '*如果要取消的订单已在生产中，则默认情况下产品将被销毁。' +
          '<br/>' +
          '*如果要取消的订单已在生产中，则默认情况下产品将被销毁。生产中产品的费用不可退还，运费将在一个工作日内退还到您的paypal账户（退款运费：$${运费}）'
      },

      t: {
        str: '百货商店',
        oid: '订单号',
        eoc: '外部订单号',
        tao: 'ToAddit订单号',
        cus: '顾客',
        sta: '地位',
        tra: '跟踪',
        tot: '全部的',
        d: '日期',

        pro: '产品',
        ads: '住址',

        oi: '订单项目',
        cs: '颜色/尺寸',
        sku: 'SKU',
        qua: '数量',

        transType: '交易类型',
        transNo: '交易编号',
        Serial: '序列号',
        ws: '请选择物流',
        lnm: '物流尚未匹配',
        nssTip: '请在产品关联完成之后再选择物流'
      },

      // $t('page.odr.detail.')
      detail: {
        apro: '至少添加一个产品',
        cancelOdr: '取消订单',
        cDesc: 'ToAddit 处理产品',
        rDesc: '发货至新地址',
        cm: '您确定要取消订单吗？',
        rm: '您的退款将在一个工作日内退回到您的帐户。',
        confOdr: '确认订单',
        copyOdr: '复制订单',
        sureCopy: '这将创建一个新订单，包含现有订单的所有详细信息。',
        confPro: '确认产品',
        detail: '产品信息',
        placeOdr: '下订单',
        createSuc: '已成功创建',
        createCont: {
          notSynced: '订单已被复制。订单状态为“未同步”。',
          unpaid: '订单已被复制。订单状态为“未付款”。'
        },

        collect: '收集${num}产品信息',
        view: '查看所有${num}订单产品信息',

        alert: {
          toBePaid: '请尽快付款，您的订单将在${countDown}内被系统自动取消',
          failed: 'Failure reason: Payment failure',
          ioss: '自2021 7月1日起，ToAddit将对运往以下欧盟国家的订单征收进口增值税。ToAddit将向物流承运人提交所收税款，以确保您的包裹清关。如果您提供IOSS编号，则ToAddit不会向您收取税款。',
          iossLink: '账单/欧盟和英国增值税'
        },
        title: {
          checkout: '结账',
          create: '创建订单',
          personal: '手动订单',
          sync2: '同步的项目',
          ship2: '发货信息'
        },
        empty: {
          bill: '编辑地址后显示订单摘要',
          ship: '请编辑您的发货地址',
          shipping1: '请先添加一个地址',
          shipping: '您的订单没有可用的装运方式.',
          contact: `请联系${SERVICE_EMAIL}`
        },
        t: {},
        back: '返回我的订单'
      },

      // $t('page.odr.refund.')
      refund: {
        1: '平台退款',
        2: 'PayPal接受',
        3: '退款成功',
        rps2: '退款产品',
        rfr: '退货原因',
        sd: '情况描述',
        sdph: '请描述您的情况',
        rq: '退款数量',
        title: {
          ing: '退款处理',
          suc: '退款成功',
          reject: `异常退款。请联系${SERVICE_EMAIL}`,
          underReview: '退款处理',
          shipped: {
            underReview: {
              title: '请等待平台处理',
              value: '已成功启动售后服务申请。请耐心等待ToAddit平台处理完毕。',
              label1: 'ToAddit警告',
              value1:
                '在平台同意后，系统会退回到你的支付账户。如果平台拒绝，您可以修改退款申请并重新发起。平台会重新处理。'
            },
            reject: '售后已被拒绝'
          }
        },
        type: {
          o: '退款类型',
          awaitingProduction: '取消订单退款（等待生产）',
          inProduction: '取消订单退款（生产中）',
          shipped: '售后退款'
        },
        amount: {
          o: '退款金额',
          total: '退款总额'
        },
        time: {
          suc: '退款成功时间',
          completion: '退款完成时间',
          reject: '退款成功时间',
          underReview: '取消时间'
        }
      },
      // $t('page.odr.pay.')
      pay: {
        btn: {
          o: '支付',
          s: '提交',
          sd: '保存草稿'
        },
        pc: '跳转到PayPal支付订单页面。',
        pSuc: '支付成功',
        pSucf: '付款成功',
        pF2: '支付失败',
        pFc1: '您的付款未成功处理，请返回订单页面并重试。',
        pFc2: `如果您有任何问题，请联系我们${SERVICE_EMAIL}`,
        pFb: '提示：支付异常可能是由于浏览器阻止弹窗造成的，如果是该问题请解除弹窗限制后再次支付',
        pa: '',
        pt: '付款金额',
        ps: '支付状态',
        pm: '支付方法',
        pm2: '付款方式',
        pms2: '支付方法',
        b: '余额',
        bt: '银行转账',
        bi: '目前余额不足，请充值',
        pf: '支付运费',
        fresh: '刷新',
        freshTxt: '订单金额数据已经更新，\n 请刷新页面数据。',
        freshTxt1: '订单数据已经更新，\n 请刷新页面数据。',
        title: {
          b: '账单',
          os2: '订单摘要',
          as2: '小结'
        }
      },
      step: {
        // $t('page.odr.step.afterSales.suc.')
        afterSales: {
          1: '申请售后服务',
          2: '待审批',
          3: '售后服务完成',
          rej: {
            title: '售后服务被拒绝',
            time: '审查时间',
            reason: '原因',
            btnText: '重新申请售后'
          },
          rev: {
            1: '请等待平台处理。',
            desc1: '您已成功启动售后服务申请。请耐心等待ToAddit平台处理。',
            2: '平台同意后，系统将退款至您的支付账户。',
            3: '如果平台拒绝，您可以修改退款申请并重新启动。平台将再次处理它。'
          }
        },
        returned: {
          1: '用户申请退货',
          2: '平台交付',
          3: '包已签名',
          viewRecord: '查看退款流程记录',
          title: {
            1: '用户申请退货并成功支付退货运费',
            record: '账单记录',
            addr: '返回地址',
            ship: '运输方法',
            2: '平台退货订单运费'
          }
        }
      },

      // $t('page.odr.create.')
      create: {
        shipping: '请先填写收货地址',
        confSave: '想待会再做吗？',

        bulkAddConf: '批量选择会有默认颜色尺码，请自行修改成想要的产品'
      },
      // $t('page.odr.noticePay.')
      noticePay: {
        m: '这个订单的产品由于尺寸较大，可能会分成几包发货。有两种选择：',
        m1: '-同意接收多个包裹并继续付款。',
        m2: '-如果您不同意，我们的销售代表将与您联系，为您提供更好的解决方案。',
        cab: '等待销售代表联系',
        cob: '同意并支付'
      },

      // $t('page.odr.wholesaleChange.')
      wholesaleChange: {
        0: {
          unpaid: '产品信息修改后，订单变更成普通单，需重新选择物流，确认是否变更',
          toBePaid: '产品信息修改后，订单变更成普通单且订单状态将变更成未支付订单，需重新选择物流，确认是否变更'
        },
        1: {
          unpaid: '产品信息修改后，订单变更成批发单，需重新选择物流确认运费，确认是否变更',
          toBePaid: '产品信息修改后，订单变更成批发单且订单状态将变更成未支付订单，需重新选择物流确认运费，确认是否变更'
        }
      }
    },
    // $t('page.pro.')
    pro: {
      o: '产品',
      os: '产品',
      c: '颜色',
      c0: '颜色',
      s: '尺寸',
      s0: '尺寸',
      qty: '数量',
      qty2: '数量',
      p: '价格',
      up2: '单价',
      retail: '零售价',
      itP: 'ToAddit 价格',
      bp: '散装价格',
      sa: '开始于',
      sku: 'SKU',
      q: '量',
      is0: '项目',
      design: '设计',
      sc: '款式码',
      in: '图片名称',

      allPs: '所有产品',
      name: '产品名称',
      nameP: '搜索产品名称',
      styleP: '搜索款式',
      variants: '变体',
      ToAdditI: 'ToAddit 项目',
      ap: '添加产品',
      apto: '添加产品',
      sp2: '选择产品',
      pns: '产品名称与SKU',
      fn: '文件名称',
      material: '原型材质',
      process: '生产工艺',
      market: '营销分类',
      proShip: '运输',
      proInP: '生产中',
      proDone: '由客户交付并签字。',
      a: '协会',
      nss22: '未同步SKU',
      nps: '新产品',
      nps2: '新产品',
      mp: '我的产品',
      sDot: '搜索中...',
      productName: '产品名称',
      code: '产品编码',
      imageName: '图片名称'
    },
    folder: {
      name: '文件夹名称',
      warning: '文件夹名称不能超过64个字符',
      change: '更改文件夹',
      download: '下载文件',
      del: '删除',
      edit: '编辑文件名称',
      remove: '是否确实要删除此文件夹?',
      add: '添加子文件夹',
      create: '创建新文件夹',
      cancel: '取消',
      save: '保存',
      sub: '子文件夹名称',
      lenLimit: '请输入2-30个字符',
      remTip: '文件夹中的所有图片都将被完全删除，无法恢复。',
      success: '操作成功',
      rem: '是，删除',
      sel: '请先选择图片',
      undown: '无法下载无效的产品模型',
      noVal: '抱歉，没有有效图片',
      information: '图像信息',
      delete: '是的，删除',
      conDel: '是否确实要删除这些图像?',
      conDel1: '是否确实要删除这张图像?',
      delTip1: '这张图片已定制了<span style="color: #384edb">$total</span>个产品',
      delTip2: '删除这张图片将会同样删除<span style="color: #384edb">$total</span>个定制产品，是否删除？',
      delTip3: '这些图片已定制了<span style="color: #384edb">$total</span>个产品',
      delTip4: '删除这些图片将会同样删除<span style="color: #384edb">$total</span>个定制产品，是否删除？',
      delTip5: '提示：包括删除已下架的定制产品。',
      delTitle: '删除文件',
      imgName: '图像名称',
      imgReq: '图像名称是必需的',
      less200: '图像名称不能超过200个字符',
      down: '下载文件',
      design: '产品设计',
      disabled: '图像已禁用',
      unDown: '无法下载禁用的图像',
      upload: '上载新文件',
      uploading: '正在上传...',
      clear: '清除',
      found: '在所有图像中找到的结果',
      unChange: '无法移动禁用的图像',
      deleteAll: '是否确实要删除这些产品?',
      create1: '您当前在$folder下创建一个新的文件夹'
    },
    productTemplates: {
      editProductDetail: '编辑产品详细信息',
      mockupDownload: '模型下载',
      redesign: '重新设计',
      var: '变体信息',
      sg: '尺码指南',
      recustom:
        '由于我们已经修改了此产品的打印模板，请创建新项目并替换最初关联的产品，以避免最终产品出现问题，因此无法订购无效项目。',
      delete: '删除',
      export: '导出变体信息',
      info: '变体信息',
      create: '创建新产品',
      detail: '产品详情',
      template: '模板',
      code: '产品编码:',
      dropdownList: [
        {
          label: '编辑产品详情',
          value: 'edit'
        },
        {
          label: '模型下载',
          value: 'download'
        },
        {
          label: '重新设计',
          value: 'redesign'
        },
        {
          label: '删除',
          value: 'delete'
        }
      ],
      option: {
        column: {
          name: {
            searchPlaceholder: '模板名称、产品名称'
          },
          category: {
            searchPlaceholder: '全部产品'
          },
          order: {
            searchPlaceholder: '创建时间：最新第一个'
          },
          newestOrder: '创建时间：最新第一个',
          oldestOrder: '创建时间：最早的第一个',
          sku: 'SKU',
          productName: '产品名称',
          code: '产品编码',
          imageName: '图片名称',
          sort: '排序'
        }
      },
      ats: {
        ses: '选择商店',
        store: '商店',
        title: '添加到商店',
        ps: '个人ToAddit商店',
        ss: 'Shopify商店',
        etsy: 'Etsy商店',
        os: '操作成功! 点击',
        tv: '查看进度',
        max50: '选择不超过50种产品',
        noExists: '产品列表不存在',
        error: '产品列表数据异常',
        unPublish: `选择的产品中由于使用了某些禁用字体，不能发布的有：{errList}`
      }
    },
    combination: {
      sku: '合成sku',
      name: '产品名称',
      info: '产品信息',
      pic: '产品图片',
      date: '日期',
      design: '批量设计',
      view: '查看',
      content: `我们的“批量设计”功能旨在提升用户的自定义体验，并帮助您快速生成多个定制产品。用户可以轻松选择多个产品并同时上传多张图片，系统会自动生成符合您要求的个性化设计。`,
      guide: '如何组合'
    },
    allProducts: {
      all: '所有产品',
      filter: '筛选依据',
      clean: '清除',
      Categories: '类别',
      iName: 'itemName',
      eps: '1500+ 产品',
      nas: '新品上市',
      tweys: '这将提升您的风格',
      option: {
        column: {
          englishNameLike: {
            searchPlaceholder: '搜索产品'
          },
          orderItems: {
            searchPlaceholder: '创建时间↓'
          }
        }
      }
    },
    billing: {
      pys: '付款方式',
      abl: '账户余额',
      USD: 'USD',
      op: '订单付款',
      rpf: '修改地址运费补款',
      cor: '取消订单退款（等待生产）',
      cor1: '取消订单退款（生产中）',
      rfr: '修改地址运费退款',
      asr: '售后退款',
      bl: '余额',
      export: '导出帐单记录',
      ReExport: '导出充值记录',
      withExport: '导出提现记录',
      table: {
        br: '账单记录',
        rc: '充值',
        wd: '提现'
      },
      // $t('page.billing.rechargeDialog.')
      rechargeDialog: {
        t: '充值',
        t1: '转账充值',
        rm: '充值方式',
        td: '汇款将于提交后1-3个工作天内处理',

        rai: '收款账户信息',
        tm: '转账方式',
        tr: {
          account: '账户',
          an: '账号名称',
          ca: '公司地址',
          anum: '银行账号',
          bc: '银行代码',
          bsb: '收款人银行',
          sc: '银行代码',
          brc: '分行代码',
          a: '地址',

          pn: '付款人',
          tid: '转账ID',
          contactMobile: '电话号码 (可选)',
          email: '电子邮箱 (可选)',
          rvu: '汇款凭证上传'
        },

        n: '下一步'
      },
      // 提现弹框
      withdrawal: {
        cb: '当前余额',
        WM: '提现方式',
        maxAmount: '最大提款金额：',
        ppMessage: 'PayPal 提现要求',
        message1: '充值时间已大于',
        message2: '天;',
        message3: '充值记录不超过180天;',
        btMessage: '银行转账提现要求',
        btMessage1: '1.对于每笔提款，中间银行预计每笔交易将收取约12.75美元的手续费，时间提款金额基于实际收据;',
        btMessage1_2: '2.对于每笔提款，中间银行预计每笔交易将收取约12.75美元的手续费，时间提款金额基于实际收据;',
        btMessage2: '银行转账提款预计需要3-7个工作日才能处理。',
        paypalMax: 'PayPal 目前的最大提现金额为',
        BankTransferMax: '目前银行转账的最大提现金额为',
        wa: '提现金额',
        mm: '最低限度:',
        wc: '提现费用:',
        ibfc: '中间银行浮动费用',
        eaar: '预计实际收到金额:',
        remark: '收款账号及其他备注',
        placeholder: '请输入您的收款银行帐号',
        // 警告
        warn: {
          minWarn: '提现金额不能小于最小提现金额',
          maxWarn: '提现金额不能大于最大提现金额'
        }
      },
      wdTitle: '提现',
      wdText: '提现',
      // 充值列表
      recharge: {
        detail: '详情',
        failedInfo1: '充值申请已提交平台人员审核。',
        failedInfo2: '审核将在1-3个工作日内处理。',
        failedInfo3: '审核失败',
        Reason: '原因:'
      },
      // 充值失败信息
      reLabel: {
        M: '交易方式',
        pName: '付款人姓名',
        po: '电话（选填）',
        Amount: '金额',
        rvu: '充值凭证上传'
      },
      // 提现列表
      withdrawalList: {
        wa: '提现金额',
        wc: '提现费用',
        result: '提现申请已处理，请仔细查看',
        Amount: '金额',
        PAmount: '提现金额'
      },
      type: {
        p: 'Paypal'
      },
      msg: `自2021年7月1日起，ToAddit将对欧盟27个国家/地区的订单征收增值税。ToAddit将向物流商提交征收的税款，以确保您的包裹清关。
      增值税将根据27个欧盟国家要求的百分比动态变化。征收的国家税率点击<span style="color:blue;"><a target="_blank" href="https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm#shortcut-7">此处</a></span>查看。
      如果您提供IOSS税号，ToAddit将不对您的订单征税。你应该正确填写真实的税号，如因信息不全导致包裹卡关平台概不负责。
      <span>修改税号将会同步到待关联和未支付的订单，请确认后再修改！</span>`,
      euVAT: '欧盟和英国增值税',
      column: {
        IOSS: 'IOSS 税号',
        UK: '英国税号'
      },
      Sub: '提交',
      add: '创建',
      edit: '编辑',
      Cancel: '取消'
    },

    account: {
      myAct: '我的帐户',
      edit: '编辑',
      save: '保存',
      cancel: '取消',
      changePwd: '更改密码',
      connect: '连接',
      disconnect: '断开',
      sc: '保存更改',
      change: '更改',
      newPwd: '新密码',
      t: {
        timezone: '时区',
        timezone2: '时区',
        name: '名字',
        personalInfo: '个人信息',
        pwd: '密码',
        socialActs: '社交账号',
        fullName: '全名',
        email: '电子邮件',
        phone: '手机',
        confirmPwd: '确认密码'
      },

      err: {
        notMatch: '两次输入的密码不一致'
      }
    },

    // $t('page.address.')
    address: {
      addr: '地址',
      add: '添加地址',
      edit: '编辑地址',
      del: '是的，删除',
      warning: '是否确实要删除此地址?',
      info: '请添加创建订单时要使用的地址。',
      use: '使用此地址',
      ana: '添加新地址',
      add22: '添加新地址',
      select: '选择其他地址',
      selects: '选择其他地址',
      save: '保存到您的地址列表',

      t: {
        fullName: '全名',
        phone: '手机',
        country: '国家/地区',
        state: '州/省/地区',
        s: '状态',
        addr1: '地址1',
        addr2: '地址2（可选）',
        a2: '地址2',
        city: '城市',
        code: '邮政编码'
      }
    },

    //定制产品详情页
    productsDetail: {
      Price: '价格',
      Wholesale: '批发',
      Pieces: '件',
      Material: '布料',
      Weight: '重量',
      pTime: '生产时间',
      code: '产品编码',
      sPrice: '运输价格',
      ushipping: '美国 / 标准运输',
      color: '颜色',
      size: '尺寸',
      sGuide: '尺寸指导',
      sDesign: '开始设计',
      download: '下载模型和模板',
      desc: '描述',
      ship: '运输',
      sDesc: '表中的所有测量值均指产品尺寸。产品尺寸可能相差2英寸（5厘米）。',
      table: {
        Centimeter: '厘米',
        Inch: '英寸'
      },
      weight: '重量',
      Region: '地区',
      sShip: '标准运输',
      eShip: '快速运输',
      fTime: '平均履行时间',
      sTime: '工作日',
      fItem: '第一项',
      nItem: '下一项',
      rDesc: '地区描述',
      country: '国家/地区',
      title: 'ToAddit 运输说明',
      aIntroduce: '目前ToAddit采用的是按地区收取运费的方案',
      bIntroduce: '区域划分如下',
      recommendTitle: '你也可能喜欢',
      BackToTop: '回到顶部',
      fbaSuggestion: '大货装箱建议',
      boxDetail:{
        size: '尺寸',
        volume: '体积',
        weight: '重量'
      },
      fbaTableColum: {
        sizeName: '尺码',
        expectPackedCount: '预计可装箱数量(件)',
        expectPackedTotalVolume: '预计可装箱体积(cm³)',
        expectPackedTotalWeight: '预计可装箱重量(g)'
      },
      cartonDiagram:{
        title: '纸箱图示',
        allBox: '全部纸箱',
        name:'纸箱型号',
        $volume: '外体积(cm)',
        weight: '箱子重量(KG)'
      }
    },

    //定制器
    designContainer: {
      error: '错误',
      dataExceptionCurrentSizeMismatch: '数据异常，当前列表参考尺码长度与重新设计的参考尺码长度不匹配，无法继续重新设计！',
      dataExceptionImageDisabled: '数据异常，原始图像 {errList} 已被禁用，无法继续重新设计！',
      dataExceptionImageDeleted: '数据错误：原始图像 {uniqNoExistImageIds} 已被删除，无法重新设计。',
      styleAlreadyModified: '样式已被修改',
      fontAlreadyDisabled: '使用的 {errList} 字体已被禁用',
      fontNotFoundReplaced: '{fontName} 不存在，已被替换为其他字体。',
      reDesignNoMatch: '数据异常。货架上当前的参考尺寸与重新设计的参考尺寸不一致，因此我们无法重新设计！',
      reCustomSyncToOrder: {
        message: '重新设计的产品将与待处理订单同步。\n订单状态：未同步、未付款、待付款、等待生产。',
        cancelButtonText: '否，仅保存设计'
      },
      productSelected: '已选择当前产品。',
      header: {
        title: '创建产品模板',
        background: '出身背景',
        layers: '层',
        easyMode: '简易模式',
        standardMode: '标准模式',
        clearUp: '清除',
        deleteCurrentArtwork: '删除当前画布',
        deleteAll: '删除所有',
        dpi: {
          good: '优质的',
          average: '平均的',
          adjust: '调整的',
          poor: '劣质的'
        }
      },
      tabs: {
        allProducts: '目录',
        allProductsColumn: {
          column: {
            name: {
              searchPlaceholder: '搜索产品'
            },
            title: {
              searchPlaceholder: '搜索图片'
            }
          }
        },
        //公共图片
        myImage: '图像',
        //我的图片
        designLibrary: '发现',
        text: '文本',
        background: '背景'
      },
      text: {
        fontSetting: {
          addText: '添加文本',
          enterFontName: '请输入字体名称',
          fontListCannotBeEmpty: '字体列表不能为空',
          selectTextLayerToProceed: '请在继续之前选择一个文本图层',
          reloadFontLibrary: '重新加载字体库',
          editText: '编辑文本'
        }
      },
      background: {
        applyAll: '全部应用'
      },
      main: {
        designReminder: '尽量避免在虚线处设计具体图案，可能会由于尺码、裁片造成图案偏移。',
        recommendedImageSize: '建议尺寸',
        printQuality: '打印质量',
        low: '低',
        lowDetail: '根据经验评估，可能与实际生产存在一定差异。',
        high: '高',
        copyTo: '复制到',
        allLayers: '所有图层',
        copySizeDataTo: '将大小数据复制到',
        allSize: '所有尺寸',
        warningTip0: '图像放大：超过9倍（长度*宽度>9），放大后图像中的一些小细节可能会模糊',
        warningTip1: '图像缩小：小于0.25倍（长度*宽度<0.25），缩小后图像会丢失一些细节',
        multipleSizeAddSize: '确认添加所有尺寸的图片',
        multipleSizeDeleteSize: '确认删除所有尺寸的图片',
        oneDesignToStandard: '模式切换后，原始设计数据将被清除  \n  设计图像将切换到标准模式。', //一键定制切换专业定制
        standardToOneDesign: '切换模式后，将清除原始设计数据。',
        prototypeTakenOff: '原型已下架，无法定制。',
        referSizeMatchFail: '数据异常。重新设计的参考大小不匹配。'
      },
      operation: {
        size: '尺寸',
        pictureOperation: '图片操作',
        //无图片下提示
        operationalRequirements: '操作要求',
        case1: '案例1',
        case2: '案例2',
        lineHeight: '行高',
        //定制提示
        case1Tip: '请确保您的文本或重要元素放置在安全区域。',
        case2Tip: '一定要用实线遮盖图片，以避免缝纫时出现白色边缘。',
        selectLayerPrompt: '请选择要操作的图层',
        //图片操作
        layerOrder: {
          title: '安排',
          iconTip: {
            bringToFront: '置于最前面',
            sendToBack: '置于底层',
            bringForward: '提出',
            sendBackward: '置后',
            duplicate: '复制',
            delete: '删除'
          }
        },
        align: {
          title: '排列',
          iconTip: {
            leftEdges: '左边缘',
            horizontal: '水平居中',
            rightEdges: '右边缘',
            topEdges: '顶部边缘',
            verticalCenter: '垂直居中',
            bottomEdges: '底部边缘'
          }
        },
        rotate: {
          title: '旋转',
          iconTip: {
            rotate30Degrees: '旋转30度',
            'Rotate-30Degrees': '旋转-30度',
            flipHorizontal: '水平翻转',
            flipVertical: '垂直翻转'
          }
        },
        scale: {
          title: '规模'
        },
        stretch: {
          title: '伸展',
          iconTip: {
            adapt: '适应',
            fill: '填满',
            maximumWidth: '最大宽度',
            maximumHeight: '最大高度',
            stretching: '拉伸'
          }
        },
        tiling: {
          title: '平铺',
          iconTip: {
            normal: '典型的',
            basic: '基本的',
            mirror: '镜子',
            halfBrick: '半砖',
            halfDrop: '半跌落'
          }
        },
        spacing: {
          title: '间距'
        },
        opacity: {
          title: '透明度',
          iconTip: {
            opacity: '透明度'
          }
        },
        fontSize: {
          title: '多行',
          iconTip: {
            leftAlign: '将多行文本左对齐',
            centerAlign: '将多行文本居中对齐',
            rightAlign: '将多行文本右对齐',
            lineHeight: '多行文本的行高'
          }
        },
        specialEffects: {
          title: '特殊效果',
          iconTip: {
            italic: '斜体'
          }
        },
        globalPreview: '全局预览'
      }
    },
    batchDesignContainer: {
      productImageFailed: '产品图片计算失败',
      multiMaterialArrangement: '多材质排列',
      singleMaterialArrangement: '单一材料排列',
      productUploadException: '产品图片上传异常',
      receivedAbnormalData: ' 收到异常数据。',
      dialogMask: {
        redesign: '重新设计',
        view: '看法',
        delete: '删除'
      },
      batchOperationOption: {
        fill: '充满',
        adapt: '适应',
        mirror: '镜子'
      },
      saveDialog: {
        synthesis: '合成',
        selectedDataEmpty: '继续此操作之前，请选择要合并的数据。',
        dewWhite: '{errMsg}原型中有白色区域，您确定要继续合成吗？',
        prototypeNeedPicture: '每个原型至少需要一个自定义映像，{errMsg}没有自定义映像，原型才能继续合成。',
        column: {
          productName: '产品名称',
          syntheticSku: '合成sku'
        }
      },
      selectBtn: {
        btnTip: '已选择{selectedNum} ，还可以选择{resideNum}添加。',
        btnTxt: '添加',
        prototypeTitle: '添加产品',
        pictureTitle: '添加图像',
        backgroundTitle: '添加背景（可选）',
        backgroundTitle1: '添加填充颜色',
        prototypeEmpty: '分类下找不到或者样式不存在，或者不支持【批量设计】，如有必要，请联系客服。',
        picture: {
          myImage: '我的图像',
          discover: '发现',
          column: {
            title: '标题'
          }
        },
        background: {
          addSelectedColor: ' 添加所选颜色',
          colorCodeError: '颜色代码异常，无法添加。',
          colorLimit: '已经达到颜色上限，无法再进行添加。',
          colorCodeExist: '所选颜色代码已存在，无法添加。'
        }
      }
    },

    helpCenter: {
      caption: 'ToAddit帮助中心',
      placeholder: '问我们一个问题...',
      results: '在所有分类中搜索到关于<span style="color: #384edb">“$keyWord”</span>的$total个结果',
      none: '没有搜索到关于<span style="color: #384edb">“$keyWord”</span>的结果<br/> <div style="margin-top: 10px">请尝试搜索其他关键字</div>',
      article: '文章',
      help: '你好！我们如何提供帮助？'
    },

    summer: {
      shop: '立即购买',
      trend: '最新趋势',
      hot: '热销',
      design: '开始定制 >',
      view: '查看更多',
      arrivals: '新品上市',
      start: '开启您的夏日时尚之旅',
      air: ['全球送货', '可选择标准快递或特快专递', '了解更多'],
      cart: ['无最低订购量要求', '跟踪订单从生产到发货的全过程。获取', '一切尽在掌握。'],
      kefu: ['一对一服务客户', '我们承诺在 24 小时内回复'],
      baozhang: ['质量保证', '严格的质量控制部门确保您收到的产品', '让您满意的产品。'],
      see: '了解在哪里可以找到我们以及如何找到我们',
      get: '联系我们',
      feature: '个性化功能',
      have: ['我们精选了一系列夏季必备的', '物品为您带来夏日风情。'],
      saleTitleList: [`男式休闲西装`, '两件式泳衣', '浴巾'],
      arrivalList: ['经典款帽子', '成人洞洞鞋', '20盎司不锈钢汽车杯'],
      contact: '联系我们',
      sorry: '对不起，此产品没有上架，您可以联系客服！',
      question: '我们将有专门的工作人员跟进您的每一个问题。',
      team: 'Toaddit支持团队',
      mail: '邮箱: info@toaddit.com',
      method: '-- 或使用以下方式进行联系：--'
    },

    school: {
      bags: '返校包',
      backpack: '背包',
      lunch: '午餐包',
      home: '家居与装饰',
      blanket: '长方形毯子',
      thermos: '保温杯',
      shirt: `儿童连帽运动衫`,
      create: '现在就创建您的定制礼品！',
      customize: '立即定制',
      quantity: '无最低订购量',
      quantityList: '按需定制, 高效及时的订单, 从生产到装运。',
      products: '1500 多种可用产品',
      productsList: '所有产品均符合当前潮流, 市场趋势和需求，旨在, 以满足尽可能多的需求。',
      designs: '提供热门设计',
      designsList: '专业设计师团队设计, 根据市场, 热销元素。',
      team: '专业服务团队',
      teamList: '全球交付，物流抵达, 按时交货，订单良好, 售后保障。',
      contact1: '您可以通过以下方式直接联系',
      contact2: '联系方法',
      view: '查看更多 >',
      bagsList: ['背包', '午餐袋'],
      homeList: ['长方形毯子', '热水瓶']
    },

    christmas:{
      clothing: '服装',
      accessories: '配件',
      footwear: '鞋类',
      bags: '箱包',
      home: '家居与装饰',
      popular:'与圣诞节有关的热门产品',
      howCustomise: {
        title: '如何定制圣诞产品',
        list: {
          select: {
            title: '选择产品样式',
            description: '浏览产品列表，选择您想要定制的款式。'
          },
          add: {
            title: '添加您的设计',
            description: '使用我们免费的产品创建工具个性化您的产品。'
          },
          production: {
            title: '生产和物流',
            description: '下订单后，我们将生产您的订单并交付给您的客户！'
          }
        }
      },
      journey:{
        quantity: '无最低订购量',
        quantityList: '按需定制，高效及时下单，从生产到发货。',
        products: '1000 多种可用产品',
        productsList:
          '所有产品都符合当前的市场趋势和需求，旨在满足尽可能多的需求。',
        designs: '提供热门设计',
        designsList: '专业设计师团队根据市场热销元素进行设计。',
        team: '专业服务团队',
        teamList: '全球发货，物流准时到达，订单有良好的售后保障。',
      },
      contact:{
        contact1: '您可以通过以下方式直接联系',
        contact2: '联系方法',
      }
    },

    valentinesDayCard:{
      best:'最佳选择',
      recommend: '推荐给你',
      clothing: '厚衣服',
      home: '家居与装饰',
      others: '其他'
    },


    notice: {
      ann: '公告',
      enter: '请输入关键字搜索',
      title: '标题',
      category: '分类',
      date: '日期',
      none: '“$keyWord”没有结果\n请尝试搜索其他关键字。',
      notPop: '这条公告将不再弹出',
      view: '查看所有',
      previous: '上一条',
      next: '下一条'
    },

    aboutUs: {
      oneStep: '您的定制按需印刷产品的一站式平台',
      bring: '通过专业的数字资产、资源和服务将您的想法变为现实',
      find: '找到适合您的产品 —>',
      specialize: '我们专注于鞋类、箱包、汽车配件、家居和生活以及服装',
      reasonTitle: '为什么这么多卖家信任ToAddit来满足他们的打印需求?',
      whyOne: '丰富的产品品类和稳定的供应链满足您的生产需求',
      whyTw: '易于使用的设计工具来创建您独特的设计',
      whyTr: '一站式获得最优惠的价格、较短的生产时间和稳定的运输时间',
      handText: '为您提供最佳的解决方案, 最灵活的售后政策',
      mesText: '如果您对产品有清晰的愿景并且对其潜力充满信心，我们可以与您合作开发满足您特定要求的定制设计',
      goal: '通过我们的平台，您可以享受<span style="font-weight:600">无缝</span>和<span style="font-weight:600">高效的工作流程</span>，释放您的时间并资源来专注于发展您的业务和实现您的目标。',
      capacity: 'ToAddit的生产能力如何?',
      capacity1:
        '1. <span style="font-weight: 600">内部生产：</span> <span style="color: rgba(5, 0, 56, 0.72)">我们拥有自己的大型制造工厂，</span> 占地面积14000多平方米。',
      capacity2:
        '2. <span style="font-weight: 600">高效协作：</span> <span style="color: rgba(5, 0, 56, 0.72)">ToAddit的制作部门由多个部门组成，包括</span>印刷部、转印部、生产部、品管部、出货部<span style="color: rgba(5, 0, 56, 0.72)">等。他们以协调的方式协同工作，以确保您的订单得到正确执行。</span>',
      capacity3:
        '3. <span style="font-weight: 600">高品质打印机：</span> <span style="color: rgba(5, 0, 56, 0.72)">具有</span> 18热转印机器<span style="color: rgba(5, 0, 56, 0.72)">和</span> 12台UV打印机。',
      capacity4:
        '4. <span style="font-weight: 600">自有MES系统：</span> <span style="color: rgba(5, 0, 56, 0.72)">内部开发的MES系统坐标，监控、优化制造过程，确保生产计划的实现，提高生产效率和质量。</span>',
      capacity5: '5、9条生产线，200多名工人。'
    },
    howItWorks: {
      shipTittle: '这是我们发货的方式',
      design: {
        title: '在几分钟内销售您的设计理念',
        description: '随处设计和销售您的产品',
        start: '让我们履行您的订单.'
      },

      steps: {
        title: '通过4个简单步骤享受ToAddit服务',
        list: [
          {
            url: '',
            title: '选择您的产品',
            description:
              'ToAddit 提供 1500 多种可定制产品，包括 T 恤、汽车配件、箱包、家居装饰和节日用品。我们专注于鞋类，并以成为综合供应商而自豪。'
          },
          {
            url: '',
            title: '轻松设计和销售您自己的产品',
            description:
              '借助免费的模型生成器，您可以将设计应用到您选择的产品上，您可以轻松创建定制产品并将其添加到您的在线商店。'
          },
          {
            url: '',
            title: '自动将产品同步到您的商店并简化订单管理',
            description: `只需单击一下，您就可以轻松将产品同步到商店并开始销售。专注于营销您的产品，其余的由我们处理。订单付款后，它会自动导入到我们的系统中。我们负责生产、包装和运输`
          },
          {
            url: '',
            title: '快速处理和运输您的订单',
            description:
              '一旦您的订单付款，我们就会处理剩下的事情。我们的团队快速处理您的订单并尽快发货。快速可靠的订单履行，确保您的客户及时收到他们的产品。'
          }
        ]
      },

      start: {
        title: '准备好开始您的 ToAddit 之旅了吗？',
        btn: '开始吧'
      },

      services: {
        title: '一件代发服务',
        description: '启动在线商店的最简单方法'
      },

      orders: {
        title: '以下是我们如何发送您的订单',
        list: [
          {
            url: '',
            count: '①',
            title: ' 履行',
            info: '生产和履行订单需要 2-7 个工作日。'
          },
          {
            url: '',
            count: '②',
            title: ' 运输',
            info: '平均运送时间为 15 个工作日，具体取决于运送目的地。'
          },
          {
            url: '',
            count: '③',
            title: ' 交付',
            info: '一旦履行并发货，您的订单将被交付给您的客户。'
          }
        ]
      },

      grow: {
        grow: '立即通过 ToAddit 拓展您的业务。',
        question: '有任何疑问?',
        contact: '联系我们'
      },

      definition: {
        title: '什么是直运？',
        description: '无需考虑库存或存储，只需考虑您和您的业务。',
        detail:
          '使用我们的平台服务，您可以通过产品供应商在网上商店销售产品。' +
          '因此，作为所有者，您不必担心库存或产品存储，只需按需发送订单即可。'
      },

      store: {
        operate: '你准备好开始创建您的个人商店了吗？',
        btn: '选择您的产品'
      },

      about: {
        title: 'ToAddit',
        list: [
          {
            title: '关于我们',
            children: [
              {
                subTitle: '隐私政策'
              },
              {
                subTitle: '服务条款'
              }
            ]
          },
          {
            title: '支持',
            children: [
              {
                subTitle: '运送方式指南'
              },
              {
                subTitle: '怎么运行的'
              },
              {
                subTitle: '连接您的店铺'
              },
              {
                subTitle: '退货'
              }
            ]
          },
          {
            title: '联系',
            children: [
              {
                subTitle: '电子邮件：supportdropship@toaddit.com'
              },
              {
                subTitle: '联系电话: 086+ 177 0609 3305 程女士 '
              },
              {
                subTitle: '联系电话: 086+ 133 7612 3699 洪女士'
              }
            ]
          }
        ]
      },

      footer: {
        sm: '社交媒体',
        qcu: '如果您有任何问题，请与我们联系',
        cu: '联系我们',

        st: '给我发送提示，趋势，免费赠品，更新和优惠。',
        su: '提交',
        sp: '电子邮件地址',

        list: {
          s: '支持',
          h: '帮助中心',
          c: '联系',
          au: '关于我们',
        },
        child: {
          b: '博客',
          at: '关于ToAddit',
          smg: '运输方法指南',
          rar: '退款',
          pp: '隐私政策',
          tos: '服务条款',
          lam: '发表留言',
          del: '数据删除说明',
          e: '电子邮件',
          e1: SERVICE_EMAIL,
          p: '联系电话',
          p1: '086+ 177 0609 3305 程女士',
          p2: '086+ 133 7612 3699 洪女士',

          cn: '联系人:',
          cnName: '车达伟',
          phone: '电话：',
          phone2: '18016709339',
          email: '邮箱:',
          email2: 'info@forudesigns.com',
          add: '地址:',
          gs: '入门',
          pad: '产品和设计',
          orders: '订单',
          shopify: 'shopify',
          shipping: '海运'
        }
      },

      rights: {
        content: '© ToAddit Inc. 版权所有'
      }
    },

    topic: {
      banner: {
        title: '在线定制和销售潮流产品',
        subTitle: '您的电商解决方案合作伙伴',
        startDesigning: '开始设计',
        howItWorks: '如何运作？',
        shipped: '每月发货超过100万件商品',
        sellers: [
          {
            text: '拉瓦尔, 加拿大 29分钟前'
          },
          {
            text: '杰克逊, 美国 11分钟前'
          },
          {
            text: '湖景, 美国 27分钟前'
          },
          {
            text: '卡尔加里, 加拿大 24分钟前'
          },
          {
            text: '海恩斯波特, 美国 55分钟前'
          },
          {
            text: '西敏市, 美国 58分钟前'
          },
          {
            text: '温哥华, 加拿大 40分钟前'
          },
          {
            text: '迪凯特, 美国 32分钟前'
          },
          {
            text: '路易斯维尔, 美国 24分钟前'
          },
          {
            text: '都柏林, 美国 21分钟前'
          },
          {
            text: '霍普, 加拿大 17分钟前'
          },
          {
            text: '伯德特, 美国 11分钟前'
          },
          {
            text: '加纳, 美国 5分钟前'
          },
          {
            text: '博思尔, 美国 9分钟前'
          },
          {
            text: '奥沙瓦, 加拿大 2分钟前'
          }
        ],
        profitList: [
          {
            text: '100% 免费使用'
          },
          {
            text: '1500+ 时尚潮流产品'
          },
          { text: '新品不断，随时满足需求'
          },
          {
            text: '全球 TOP1 按需生产供应链：鞋类与汽车配件'
          },
          {
            text: '本地支持，全球覆盖'
          }
        ]
      },
      create: {
        title: '创建和销售您的定制产品在线',
        description: '找到完美的产品，把你的设计变成现实!您值得信赖的按需打印合作伙伴。',
        start: '开始销售',
        list: [
          {
            content: '1500+ 产品'
          },
          {
            content: '第三方仓库托管带履行订单'
          },
          {
            content: '用户友好的设计工具'
          }
        ],
        itemShip: '每天有超过2万件物品被运送出去',
        timeList: [
          {
            title: 'Agra 美国',
            content: '3分钟前'
          },
          {
            title: 'Cristina 美国',
            content: '6分钟前'
          },
          {
            title: 'Brandy 英国',
            content: '1分钟前'
          }
        ]
      },

      sell: {
        title: '用ToAddit发展你的业务',
        description: '快速、简单、实惠',
        list: [
          {
            title: '按需定制',
            description: '发现各种产品，以满足您的需求'
          },
          {
            title: '灵活的销售选择',
            description: '轻松创建或同步订单与您的商店'
          },
          {
            title: 'ToAddit处理一切',
            description: '无起订量，无风险，无需库存，一键交货'
          }
        ]
      },

      customize: {
        title: '无限的可能性与我们的可定制的产品范围',
        list: [
          {
            title: '畅销产品'
          },
          {
            title: '新品'
          }
        ],
        typesList: [
          {
            type: '鞋'
          },
          {
            type: '背包'
          },
          {
            type: '汽车配件'
          },
          {
            type: '服饰'
          },
          {
            type: '居家良品'
          },
          {
            type: '节日特惠'
          }
        ]
      },

      products: {
        title: '可定制 1500 多种时尚产品',
        subTitle: '产品利润空间大，产品质量有保证，可以快速设计然后高效上架产品',
        category: {
          Bags: {
            btn: '箱包'
          },
          Car: {
            btn: '汽车配件'
          },
          AOP: {
            btn: 'AOP 服装'
          },
          Home: {
            btn: '家居与装饰'
          },
          Footwear: {
            btn: '鞋类'
          },
          Pet: {
            btn: '宠物配件'
          }
        },
        start: '开始设计',
        all: '查看全部'

      },

      design: {
        title: '将您的设计添加到各种产品中',
        description:
          '轻松定制产品与我们的用户友好的设计工具。将您独特的设计添加到鞋子，包，汽车配件，衣服，家居和生活…',
        btn: '联系销售索要一个演示'
      },

      marketplace: {
        title: '整合存储和同步与平台',
        description: '更多的集成选项即将推出',
        EtsyTip: {
          text1: `术语“Etsy”是 Etsy, Inc. 的商标。`,
          text2: `此应用程序使用 Etsy API，但未经 Etsy 认可或认证。`
        }
      },

      merchants: {
        title: '深受全球 50,000 多家商户的信赖！',
        title2: `无论您是刚刚起步的创业公司，还是企业级电子商务公司，我们都致力于为您提供高品质的电子商务解决方案。`,
        description: '无论您是刚刚起步还是在企业级运营' + '电子商务业务，我们竭尽全力确保积极的商家体验。',
        list: [
          {
            iconCount: 5,
            name: '卢克邓菲',
            origin: 'Amazon卖家',
            experience:
              '“受疫情影响，海外业务发展停滞不前。幸运的是，ToAddit及时推出了新产品，这让我赶上了一波热潮。我希望这个平台能一直保持这种市场敏感性。”'
          },
          {
            iconCount: 5,
            name: '菲洛·帕帕斯',
            origin: 'Etsy卖家',
            experience:
              '“自2019年以来，我一直在与ToAddit合作，从旧平台过渡到这个新平台。他们提供多样化的产品目录可供选择，并不断更新新产品。对他们的服务和产品质量非常满意。我强烈推荐ToAddit给大家。"'
          },
          {
            iconCount: 5,
            name: '贝拉·安德烈亚斯',
            origin: 'Shopify卖家',
            experience: `“我刚刚开始创建自己的在线业务，这个应用程序是一个伟大的方式来测试你的想法，让你的脚在门!尤其是当你开始时物资有限的时候。它也很容易导航和创建。我非常兴奋地想知道它会把我带到哪里!”`
          }
        ]
      },

      start: {
        title: '0库存 · 0创业资本 · 一件式发货',
        title1: '免费设计一次点击生成',
        btn: '一切开始和促进您的pod业务在一个地方'
      },

      lowOrHeighMakeMoney: {
        title: '以低风险和高利润率赚钱',
        sell: '你卖一件 T 恤',
        production: '您支付生产和运输费用',
        Profit: ' 您的利润',
        get: '开始使用 ToAddit！',
        Start: '开始销售',
        leave: '如有任何问题，请给我们留言'
      },

      cookie: {
        cs: 'Cookie设置',
        info: '本网站使用 cookie 来改善用户体验。使用本网站即表示您同意使用<a style="color: #6791FF; font-weight: bold; text-decoration: underline; cursor: pointer" target="_blank" href="https://allaboutcookies.org/">您选择的cookie.</a>',
        understand: '我已知晓'
      },

      make: {
        learn: "了解更多 >",
        money: "如何利用ToAddit赚钱",
        make: [
          {
            title: "仅需几分钟在线设计产品",
            content: "有超过1500种产品模型可供选择。您可以使用先进的设计工具轻松创建独特的产品，为您的品牌生产时尚的产品。"
          },
          {
            title: "创建订单，导入订单或同步集成商店订单",
            content: "您可以直接下订单、导入订单，或与诸如Shopify之类的商店关联，将您的产品发布到商店中，订单数据将被更新和同步，使您的销售运营变得轻松。"
          },
          {
            title: "轻松销售产品，无需库存压力",
            content: "无需担心产品库存带来的压力，没有最低订单限制，无需忽视质量就能赚钱，销售您的产品，等待订单的到来。"
          },
          {
            title: "ToAddit照顾制造和物流",
            content: "ToAddit将为您的客户生产质量保证的产品，并及时将它们送达客户手中，全球发货。"
          }
        ],
        help: "ToAddit是一个按需打印平台，可帮助您建立盈利的在线业务",
        take: "它负责生产和运输，帮助你专注于销售",
        start: '开始 >'
      },

      cd: {
        easy: "添加设计并开始定制您的产品非常简单！",
        use: "使用我们的免费设计工具轻松为包、服装、家居产品、汽车配件、宠物用品等类别添加设计。",
        selection: "通过批量选择高效快速地设计产品",
        start: "开始设计 >"
      },

      different: {
        title: 'ToAddit有何不同之处？',
        reasonList: [
          {
            icon: 'icon-different1',
            title: '迎合市场潮流的产品',
            text: '1500多种时尚产品，可免费定制。热门类别持续更新，产品质量有保障。'
          },
          {
            icon: 'icon-different2',
            title: '无最低订购量',
            text: '无需大量备货，我们为您控制从生产产品到邮寄订单的整个流程。'
          },
          {
            icon: 'icon-different3',
            title: '免费使用',
            text: '只需支付产品和订单物流费用。ToAddit免费使用，价格透明。'
          },
          {
            icon: 'icon-different4',
            title: '竞争价格',
            text: '我们的产品价格可根据数量给予折扣，确保您有足够的利润空间。'
          },
          {
            icon: 'icon-different5',
            title: '专业设计团队',
            text: '如果您没有设计师为您设计产品图案，您可以联系我们提供免费的设计图或设计建议。'
          },
          {
            icon: 'icon-different6',
            title: '实时设计工具',
            text: '我们提供免费的设计工具，您可以免费定制产品，实时查看定制效果，并生成产品以同步到店铺。'
          },
          {
            icon: 'icon-different7',
            title: '品牌定制',
            text: '您可以添加个性化的品牌标识，增强您的品牌形象，与产品建立牢固的联系。'
          },
          {
            icon: 'icon-different8',
            title: '快捷便利的全球运输',
            text: '我们的运输及时高效，通常保证货物准时送达您的客户手中。'
          }
        ],
        explainList: [
          {
            title: '99%',
            text: '我们产品的客户满意度'
          },
          {
            title: '1000,000+',
            text: '每月发货量'
          },
          {
            title: '3-5 天',
            text: '生产完成时间'
          },
          {
            title: '1500+',
            text: '热门产品款式'
          }
        ],
      },

      solution: {
        look: '您正在寻找电商解决方案吗？',
        send: '发送消息给我们，ToAddit将为您提供解决方案。',
        leave: '留言',
        contact: '您可以联系我们'
      },

      brand: {
        tag: "你可以将品牌标签添加到你的产品上。",
        increase: "添加你的专属品牌logo，以增加产品的识别度，增强品牌与客户之间的粘性，并提升品牌的知名度。",
        start: "开始 >"
      }

    },

    //店铺
    store: {
      Reconnect: '重新连接',
      step: {
        first: '步骤一',
        step1: '创建您的Shopify帐户',
        second: '步骤二',
        step2: `在Shopify上安装 <span style="color:#3569FD"><a target="_blank" href="https://apps.shopify.com/toaddit?locale=zh-CN&search_id=283411a8-e174-47d5-a093-99127d27f20e&surface_detail=toaddit&surface_inter_position=1&surface_intra_position=1&surface_type=search">ToAddit应用程序</a></span>`,
        third: '步骤三',
        step3: '连接您的商店',
        four: '步骤四',
        step4: '添加您的产品'
      },
      sku: 'SKU',
      productName: '产品名称',
      code: '产品编码',
      imageName: '图片名称',
      offShelf: '产品已下架',
      skuNumber: '请输入sku号',
      sta: '状态',
      Esynced: '编辑',
      delMsgTip:
        '删除商店将完全删除以下商店数据:' +
        '<br/>' +
        '<br/>' +
        '商店产品数据将被删除.' +
        '<br/>' +
        '订单数据(未关联的，未支付的)将被删除.' +
        '<br/>' +
        '<br/>' +
        '此操作不可逆转，请谨慎操作.',
      fillpd: '请填写产品详细信息',
      vad: '变体关联',
      sss: '短袖',
      npt: '新产品',
      mpt: '我的产品',
      pro: '产品',
      search: '搜索...',
      ptvs: '产品名称，变体sku',
      cs: '颜色/尺码',
      vat: '变体',
      tps: 'Toaddi产品sku',
      cost: '费用,$',
      tp: 'ToAddit价格,$',
      rp: '零售价格,$',
      pit: '利润,$',
      pit2: '利润率,%',
      title2: '标题',
      prd: '发布记录',
      coc: '选择一个颜色 ！',
      coz: '选择一个尺码 ！',
      coi: '选择一个图像 ！',
      qsp: '查询装运价格',
      sp: '装运价格',
      title: '百货商店',
      as: '所有商店',
      us: '未同步',
      dsn: '设计',
      store: '商店',
      pre: '价格',
      von: '查看详情',
      unc: '取消关联',
      bnc: '批量关联',
      tpe: 'ToAddit 价格',
      pne: '产品名称',
      prt: '发布结果',
      pushing: '产品正在发布。。。',
      dic: {
        ial: '英制',
        mic: '公制'
      },
      status: {
        active: '在线',
        drafted: '草稿',
        synced: '已关联',
        nsd: '未关联',
        ignored: '忽略',
        tphbi: '该产品已被忽略',
        syncTip: 'Synced: 已关联toaddit定制产品的变体数量',
        notSyncTip: 'Not synced: 未关联toaddit定制产品的变体数量'
      },
      msg: {
        hngenerated: '高清图还未生成',
        sud: '成功',
        sad: '失败',
        delPro: '您确定要删除这些产品吗?',
        delProES: '确认是否删除，删除产品的同时，也将会删除在 {type} 有关的产品.',
        shopifyConfail: '您的商店授权出现问题。请重新连接您的商店。',
        authCodeError: '未找到授权码或授权码已被使用，无法获取令牌',
        estyPublishTip: '当前店铺的货币单位为：{currencyCode}, 同步产品时，目前只有美元价格的同步，其他货币的价格转换，需要esty卖家在后台自己处理',
        chooseOneImg: '每种产品模型图片至少需选择一张'
      },
      ignoreMsg: {
        oddNumber: {
          title: '您确定忽略该产品吗',
          message: '该选项将完全忽略所选的产品，同步订单时订单中的产品将被忽略。'
        },
        plural: {
          title: '你确定要忽略这些产品吗',
          message: '此选项将完全忽略所选的产品，并且在同步订单时，\n订单中的这些产品将被忽略。'
        },
        buttonText: '确认'
      },
      setting: {
        wth: '宽度',
        lth: '长度',
        slth: '袖长',
        inch: '英寸',
        centimeter: '厘米',
        cors: '颜色/尺寸',
        si: '店铺信息',
        ps: '发布设置',
        ss: '同步设置',
        title: '店铺设置',
        cs: '选择店铺',
        price: '价格',
        rate: '利润率',
        price_info: '以男士T恤为例，以下是改变上述利润数字将如何影响您的零售价格和利润',
        add_size: '将尺寸表添加到描述',
        choose: '选择尺码指南的测量系统：',
        status: '在您的商店中，同步产品的状态',
        sizeGuide: '尺寸指南说明',
        product: '产品可见性',
        sync_pro: '同步商店中的所有现有产品',
        sync_pro_info:
          '如果选择此选项，商店中的所有现有产品都将作为未同步产品导入到编辑中。如果您的商店中有大量产品需要通过ToAddit完成，您可以将商店中的产品关联起来',
        sync_pro_info_tips:
          '提示:如果您已经同步了所有产品，然后再次取消此选项，则最初从店铺同步的产品和相关数据将被删除。',
        import: '导入所有未同步的订单',
        import_info:
          '选择该选项后，您商店中的所有新订单都将导入ToAddit，其中可能包括非ToAddit平台设计的产品。如果不选中，则ToAddit只同步订单中的ToAddit产品，同步订单后不能更新或修改已同步的订单信息。',
        import_info_tips: '提示: 在商店中，如果您的某个产品只有某些尺寸与 toaddit 的产品相关联，当系统自动同步订单时，默认情况下会同步所有尺寸。',
        delivery: '运输设置',
        delivery_1: '平均履行时间10-20个工作日',
        delivery_2: '平均履行时间5-8个工作日',
        track: '物流跟踪设置',
        track_info: '自动向您的商店发送物流跟踪信息',
        track_info_desc: '如果选择此选项，一旦订单状态更改为“发货”，将自动发送物流跟踪信息。',
        delivery_set: '未设置：',
        delivery_set_info:
          '选择此项，已从ToAddit中删除的产品仍在Shopify商店的货架上。如果订单中包含已从ToAddit中删除的产品，您需要修改产品的关联产品，然后才能支付订单',
        delivery_set2: '将产品库存设置为零',
        delivery_set_info2:
          '如果选择此选项，当产品下架时，我们将将您商店中相关产品的库存设置为零，并且产品将在商店前面显示为“缺货”。',
        delivery_set3: '在Shopify商店中将产品设置为草稿状态',
        delivery_set_info3: '如果选择此选项，当您的产品下架时，我们会将您商店中相关产品的状态设置为“草稿”。'
      },
      label: {
        noStoreTip: '通过选择一个平台来销售您的产品，连接现有的商店或创建一个新的商店。',
        connectShopify: '将您的Shopify商店连接到ToAddit',
        createPersonStore: '创建个人商店',
        personStoreDesc: '你想使用一个目前没有与ToAddit集成的电子商务平台，你亲自销售产品，并希望手动为客户下订单。',
        skuPreTitle: 'SKU前缀设置(可选)',
        skuPrePlace: '请输入SKU前缀',
        skuPreSet: 'SKU前缀设置:',
        skuPreSetTip:
          '填写前缀，SKU自动生成为:  <span style="color:#3569FD">前缀+款式-尺码</span>. 例：产品款式为F51，尺码38，前缀DayDayup\n' +
          '实际生成sku： DayDayupF51-38\n' +
          '您可以不设置sku，当你点击[发布]时，会使用与定制产品相同的SKU进行发布',
        rateTitle: '汇率设置',
        ratePlace: '请输入汇率',
        rateTip: '若汇率设置的话，最终价格将乘以汇率发布到对应店铺上',
        etsyImgLimit: 'etsy店铺每个产品最多可选择9张模型图',
        ords: '订单',
        pros: '商品',
        ped: '已发布',
        us: '美国',
        sbs: '按尺寸搜索',
        size: '尺寸',
        sbc: '按国家/地区搜索',
        cry: '国家/地区',
        ron: '区域描述',
        ren: '区域',
        url: '商店地址',
        sname: '商店名称',
        proVis: '产品可见性',
        setSkuNotice: '注意：在确定零售价格时，请适当参考ToAddit的产品运费和订单的增值税征收。',
        skuset: 'SKU和价格设置',
        colors: '颜色',
        create: '连接或创建在线商店以开始添加产品',
        pick: '选择一个连接您的商店',
        connect: '连接存储',
        shopify: '购物',
        shopifyDesc: '电子商务平台，提供您在网上销售所需的一切。',
        etsy: 'Etsy商店',
        etsyDesc: '在全球独一无二的创意产品市场之一销售您设计的产品',
        personal: '个人ToAddit商店',
        personalDesc: '创建一个个人商店来管理您的其他产品和订单。',
        storeDetail: '您店铺的详细信息',
        variantsOrMockups: '变体和模型',
        chooseColors: '选择颜色：',
        selectALLColors: '选择所有颜色',
        selectSize: '选择大小：',
        selectAllSizes: '选择所有尺寸',
        chooseMockups: '选择实体模型：',
        mainMoImg: '主模型图像：',
        titleFirSee: '标题图像是客户首先看到的。',
        skuSetting: 'SKU设置',
        setSku: '设置您想要的产品SKU和收入，我们将根据您的需求为您制定零售价格',
        proDetails: '产品详细信息',
        title: '标题：',
        description: '描述',
        collections: '集会：',
        productSeries: '产品系列：',
        addSize: '将尺寸表添加到说明',
        addEtsySize: '在产品效果图中添加尺寸图表图像',
        setAll: '设置全部',
        minPriceMsg: '一些变体的价格低于ToAddit的价格。您需要设置一个高于ToAddit发布价格的销售价格。',
        etsySearch: {
          stKeywords: '搜索标题关键词',
          svSKU: '搜索变体SKU，多个变体以逗号分隔',
          stSKU: '搜索ToAddit产品SKU，多个SKU用逗号分隔'
        },
        ep: '外部产品',
        pp: 'Toaddit产品',
        wp: '外部产品或Toaddit产品'
      },
      act: {
        addStore: '添加新商店',
        addPro: '添加产品',
        record: '发布记录',
        blukDel: '批量删除',
        pin: '再次发布',
        quickSynced: '快速关联',
        ignoredProducts: '忽略产品',
        Ignore: '忽略',
        Unignore: '取消忽略'
      },
      sync: {
        all: '全部',
        syd: '已同步',
        nod: '未同步',
        psd: '部分同步',
        noe: '无法使用的'
      },
      quickSync: {
        title: '快速同步',
        ssp: '选择店铺产品 (${num})',
        cmp: '选择匹配的产品',
        ms: '配套尺寸',
        mcp: '配套定制产品',
        how: '如何使用',
        confirm: '确认同步',
        back: '返回',
        pro: '店铺产品',
        mat: '匹配toAddit的产品尺码：${ name }',
        mat1: '匹配toAddit的产品模板：${ name }',
        usage: '请尽量选择款式相同、图片不同的店铺产品.',
        notFound: `找不到产品?`,
        design: '定制一件新的产品',
        return: '返回到产品列表',
        res: '成功关联${ proNum }件产品, ${ varNum }个变体',
        again: '您可以再次点击查看该功能的使用说明',
        ok: '好',
        next: '下一步 (${ nextNum })',
        next1: '下一步',
        associate: '关联',
        varFailed: '${ varNum }件变体关联失败',
        product: '店铺产品',
        size: '店铺产品的尺码',
        assSize: '关联的尺码',
        result: '结果',
        con: '确认',
        und: '我已知晓',
        syncInfo: '用途: 批量选择商店中同类型的多件产品，匹配您在ToAddit设计的产品和尺寸',
        detail: '更多详情请点击',
        proTitle: '产品标题',
        code: '款式编码',
        sz: '尺码',
        pss: '请选择尺码',
        psp: '请选择产品',
        psop: '请选择一件产品',
        tsp: '所选产品为无变体属性具有单一尺寸的产品',
        name: '产品名称'
      },
      // 忽略弹框
      ignoreBox: {
        dialogOption: {
          title: '忽略',
          text: '忽略',
          variants: '变体',
          tp: 'ToAddit 产品',
          is: '忽略状态'
        },
        tab: {
          ip: '忽略产品',
          iv: '忽略变体'
        },
        productTip1: '忽略整个产品，适用于非ToAddit可生产的产品',
        productTip2: '和来自其他供应商平台的产品。',
        biv: '批量忽略变体',
        ig: '忽略',
        unig: '取消忽略',
        cip: '取消忽略产品',
        cbt: '确认'
      },
      pushStatus: {
        sed: '已成功',
        png: '发布',
        ush: '取消发布',
        fed: '失败'
      },
      required: {
        storename: '需要存储名称'
      },

      syncPro: {
        etsy: {
          qty: '数量',
          category: '分类',
          syncCategory: '同步分类',
          syncSPId: '同步交货选项',
          placeCategory: '请选择分类',
          tags: '标签（最多13个标签用逗号分隔，每个标签不超过20个字符。）',
          tagsCase: '形状、颜色、风格、功能等。',
          deliveryOpts: '交货选项',
          placeDeliveryOpts: '请选择交货选项',
          deliveryOptsTip1: '中国范围：免费送货',
          deliveryOptsTip2: '全球范围：免费送货',
          deliveryOptsTip3: '*你可以在Etsy上随时更改它。',
          bind: '绑定Etsy店铺',
          bindSucc: '授权绑定Etsy店铺成功'
        }
      }
    },
    shopify: {
      cot: '将您的商店与ToAddit连接',
      cra: '创建新的ToAddit帐户',
      coa: '确认您的电子邮件地址并创建新的ToAddit帐户',
      byp: '单击注册即表示您同意ToAddit服务条款和隐私政策',
      cac: '连接新的ToAddit帐户',
      sia: '登录并连接现有的ToAddit帐户'
    },
    etsy:{
      sm: 'Etsy "一词是 Etsy, Inc. 本应用程序使用 Etsy API，但未经 Etsy 公司认可或认证。',
      auth: '授权esty店铺应用，应用名称为ToAdditDO',
    },
    export: {
      export: '导出',
      failed: '导出失败',
      title: '导出记录',
      alert: '请注意，导出的记录仅保存30天，请尽快下载文件。',
      down: '下载',
      proceeding: '进行中...',
      t: {
        code: '编码',
        tof: '文件类型',
        et: '导出时间',
        edt: '最新导出时间',
        q: '量',
        e: '正在导出',
        c: '完整的',
        le: '上次导出',
        menu: '过程'
      }
    },

    // $t('page.consult.')
    consult: {
      title: '帮助服务',
      t1: '如果您在使用本平台过程中遇到任何问题或困难，可以及时与我们联系，寻求帮助和建议!',
      t2: '我们将有专门的人员跟进您的每一个问题。',
      user: {
        title: 'Toaddit帮助',
        t1: '您可以通过以下联系方式直接联系：'
      }
    },

    allWorkOrders: {
      leaveMessage: '发表留言',
      myMessage: '我的留言',
      back: '返回',
      send: '发送',
      number: '单号',
      reason: '联系原因',
      comment: '意见/问题',
      submissionTime: '提交时间',
      ci: '联系信息'
    },

    ValentinesDay:{
      banner:{
        t1: '联系折扣',
        t2: '体验升级',
        t3: '款式多样'
      },
      shirt:{
        t1: '美国制造纯棉 T 恤',
        t3: '免费送货',
        t4: '印花 T 恤',
        t5: '前后面板',
        t6: '立即购买'
      },
      wallet:{
        t1: '皮带的长 PU 钱包',
        t2: '女士内裤',
        t3: '舒适内衣',
      },
      draw:{
        t1: '及时交货',
        t2: '万众瞩目',
      },
      step:{
        one:{
          t1: '选择产品风格',
          t2: '浏览产品列表，选择您想要定制的款式。'
        },
        two:{
          t1: '添加您的设计',
          t2: '使用我们免费的产品创建工具个性化您的产品。'
        },
        three:{
          t1: '生产和物流',
          t2: '下订单后，我们将生产您的订单并交付给您的客户！'
        }
      }
    },

    mothersDay: {
      tShirt: '女士长袖T恤',
      sleevedTShirt: '女士长袖T恤',
      slippers: '棉质拖鞋',
      fabric: '柔软舒适的法兰绒毛圈织物',
      wallet: 'PU挂绳钱包（金属拉链）',
      zipper: '百搭手拿包，金属拉链',
      mouth: '圆口，可定制',
      shop: '立即购买 >',
      category: {
        wc: `女装`,
        fw: '鞋类',
        bags: '箱包',
        home: '家居装饰',
        showALL: '显示全部'
      },
      title: {
        clothing: `女士服装`,
        footer: '鞋类',
        bags: '箱包',
        home: '家居装饰'
      },
      showMore: '显示更多',
      mjl: `梅森罐装饰灯`,
      lfsb: '爱之花影盒',
      bl: '创意瓶灯',
      tumbler: '40盎司吸管随行杯',
      lcl: 'LED仿真烛灯',
      tip: '如需更多详情，请联系我们的销售支持团队！'
    },

    fathersDay: {
      category:{
        clothing: '服装',
        footwear: '鞋类',
        home: '家居与装饰',
        car: '汽车配件',
        other: '其他推荐'
      },
      howCustomise:{
        title: '如何定制父亲节产品',
        t1: '选择产品款式',
        t2: '添加您的设计',
        t3: '生产与物流',
        description1: '浏览产品列表并选择您想要定制的款式。',
        description2: '使用我们的免费设计工具个性化您的产品。',
        description3: '下单后，我们将生产您的订单并直接配送给客户！'
      },
      specialTitle: '特别推荐',
      productTitle: '父亲节相关热门产品',
      viewMore: '查看更多 >',
      journey:{
        title1: '无最低起订量',
        title2: '1000+可选产品',
        title3: '热门设计可选',
        title4: '专业服务团队',
        content1: '按需定制，从生产到发货高效及时。',
        content2: '所有产品均符合当前市场趋势和需求，力求满足多样化需求。',
        content3: '专业设计师团队根据市场热卖元素进行设计。',
        content4: '全球配送，物流准时到达，订单享有完善售后保障。'
      },
      contact1: '您可以通过以下方式直接联系',
      contact2: '联系方式'
    },
    summerDay: {
      howCustomise: {
        title: "如何定制产品",
        t1: "选择产品样式",
        t2: "添加你的设计",
        t3: "生产和物流",
        description1: "浏览产品列表并挑选你想要定制的样式。",
        description2: "使用我们的免费产品创建工具个性化你的产品。",
        description3: "下单后，我们将制造你的订单并将其交付给你的客户！"
      },
      product: {
        title: "与夏季相关的热门产品",
        beach: "夏季海滩",
        car: "汽车配件",
        footer: "鞋类",
        viewMore: "查看更多 >"
      },
      advantage: {
        title1: "无最低订购量",
        title2: "1000+ 可用产品",
        title3: "热门设计可用",
        title4: "专业服务团队",
        content1: "按需定制，高效及时地从订单生产到发货。",
        content2: "所有产品均符合当前市场趋势和需求，旨在满足尽可能多的需求。",
        content3: "专业设计师团队根据市场热门销售元素进行设计。",
        content4: "全球配送，物流准时到达，订单有良好的售后服务保障。"
      },
      contact1: "您可以通过以下方式直接联系",
      contact2: "联系方式"
    },
    BackToSchool: {
      howCustomise: {
        title: "如何定制产品",
        t1: "选择产品样式",
        t2: "添加你的设计",
        t3: "生产和物流",
        description1: "浏览产品列表并挑选你想要定制的样式。",
        description2: "使用我们的免费产品创建工具个性化你的产品。",
        description3: "下单后，我们将制造你的订单并将其交付给你的客户！"
      },
      category: {
        bags: '包',
        fw: '鞋子',
        kc: '儿童服装',
        hd: '家居装饰'
      }
    }
  },
  // 菜单
  menu: {
    allProducts: '所有产品',
    categories: '分类',
    Bestsellers: '最畅销',
    NewArrives: '新品上市',
    myFavorites: '我的收藏',
    howItWorks: '如何运作',
    integrations: '集成',
    shopify: 'Shopify公司',
    helpCenter: '帮助中心',

    productTemplates: '产品模板',
    printFiles: '我的图库',
    orders: '订单',
    stores: '商店',
    billing: '账单',
    billingRecord: '账单记录',
    Payments: '付款方式',
    EUAndUKVAT: '欧盟和英国增值税',
    settings: '设置',
    account: '账户',
    store: '便利店',
    address: '地址',
    settingsStore: '商店',
    settingsAddress: '地址',
    exportRecords: '导出记录',

    homePage: '主页',
    allProduct: '所有产品',
    lawCompliance: '法律与合规',
    aboutUs: '关于我们',
    custom: '定制项目',
    combination: '套装产品',
    batchDesignContainer: '批量设计',
    summer: '夏天',
    school: '开学季',
    christmas: '圣诞节',
    ValentinesDay: `情人节`,
    MothersDay: '母亲节',
    FathersDay: '父亲节',
    toAdditPremium: 'ToAddit 高级版',
    summerDay: '夏天',
    BackToSchool: '返校季'
  }
}
