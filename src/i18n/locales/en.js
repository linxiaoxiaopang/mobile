/* eslint-disable */
// @/locales/en.js
import locale from 'element-ui/lib/locale/lang/en'
const TIMEZONE_DIC = []
const SERVICE_EMAIL = ''
// 文本中存在特殊字符：
// \n
// ${[a-zA-Z]}  （用于将这个字符替换为动态的值）

export default {
  ...locale,

  lan: {
    en: 'English',
    vi: 'Vitetnamese',
    abbr: 'EN'
  },
  law: {
    pr: 'Privacy Policy',
    re: 'Return and Refund',
    te: 'Terms of Service',
    sp: 'Shipping Information',
    de: 'Description of data deletion'
  },
  valid: {
    email: 'email',
    suffix: 'is required',
    default: 'data',
    nf: 'Please fill in the correct number',
    pecd: 'Please enter the data correctly',
    only6: 'Only 6 digits can be entered'
  },
  dic: {
    foldersList: {
      dictLabel: 'All Image'
    },
    categoryId: {
      dictLabel: 'All products',
      dictLabel2: 'ALL Products'
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
    placeholder: 'Enter the {key} to search'
  },

  validTip: {
    isMoney: 'Please enter the correct amount.',
    charRange: 'Please enter {range} characters.',
    number: '',
    isInteger: '',
    intFloat: 'Please enter a number greater than 0.',
    notNFloating: '',
    money: '',
    notChinese: '',
    username: '',
    email: 'Please enter a valid email address.',
    passwordRobust:
      'Passwords must be at least 8 and no more than 16 characters in length，including one uppercase letter, one lowercase letter and one number.',
    confirmPassword: 'Passwords are different.',
    lowerCase: '',
    telephone: 'Please enter the correct phone number.',
    alphabets: 'Please enter uppercase and lowercase letters, numbers, spaces, or special characters.',
    commonCharacters: '',
    numberAndLetter: 'You can only enter numbers and letters',
    commonCharactersAndPoint: '',
    blankPassword: '',
    idNumber: '',
    notAllIsNumber: '',
    userNameProhibited: 'Username cannot contain prohibited words. Please reset it.', //用户名违禁词
    'username2-30': 'Username must be at least 2 and no more than 30 characters in length.',
    charLenLimit: 'Please enter {min}-{max} characters.'
  },

  //弹窗提示
  msg: {
    shopRegSucc: 'Successfully registered, please use this account to log in and authorize',
    ss2: 'Save Successful',
    success: 'Successful',
    pictureSuccess: 'All picture upload successful',
    error: 'Error',
    failed: 'Failed',
    tips: 'Tips',
    notice: 'Notice',
    os: 'Operate successfully',
    wait: 'Please wait a moment',
    waitTxt: "Your payment is being processed in background. \n Don't refresh or close your browser.",
    resendSuccess: 'Resend succeeded',
    copySuccess: 'Copied successfully',
    copyFailed: 'Copied successfully',
    leastOne: 'Please select at least one data',
    leastOrder: 'Please select at least one order',
    uploadOsSFailed: 'Failed to upload OSS',
    textImageUploadFailed: 'Text image upload failed',
    canvasRenderError:
      'Canvas data rendering exception, please clear the canvas data or refresh the page to customize again.',
    textTooLongOrImageTooLarge: 'Text too long or image layer too large, generation failed.',
    empty: 'No data',
    pc: 'Payment completed',
    afterPay: 'Sorry, you are in the process of payment, please operate after payment.',
    timedOut: 'Request timed out',
    networkError: 'Network Connection Error',
    serverError: 'Server Error',
    reLogin: 'ReLogin',
    connectFailed: 'Failed to connect to the server',
    loginExpired: 'The login status has expired',
    loginNotConnected:
      'An account with the same email already exists.Please first sign in using your email and password, then connect your social account in Dashboard > Settings.',
    thrHasReged: 'The email account has been registered, Please use a new account to register',
    dashboard: 'Dashboard',
    homepage: 'Homepage',
    out: 'Log out',
    designIdError: 'ID exception, refresh the page and try again',
    //oss提示
    fileAbnormal: 'Abnormal upload file type',
    failedSignature: 'Failed to obtain signature',
    imageFailed: 'Image upload failed',
    serverUrlError: 'Server Url must be equal to 1',
    picNameError: 'The image name is abnormal with special character "$1".',
    fiveMinutes: 'Please operate in five minutes',
    shopExists: 'Shop already exists',
    shopUnavailable: 'Sorry, this shop is currently unavailable',
    skuRepeated: 'Custom SKUs cannot be repeated',
    exportNoData: 'No data yet, unable to export',
    clearUp: 'Are you sure you want to clear the canvas',
    reupload: 'The uploaded image exceeds 200MB, please reupload',
    addLayerException: 'Network exception, canvas layer creation failed, Please reselect the image.',
    newYear: '2024 Lunar Year Holidays Notice',
    login: 'Please log in to the system first'
  },

  // 通用
  // $t('com.')
  com: {
    noInfo: 'There is no information in this category',
    ref: 'Refresh',
    edit: 'Edit',
    save: 'Save',
    back: 'Back',
    submit: 'Submit',
    del: 'Delete',
    cancel: 'Cancel',
    confirm: 'Confirm',
    return: 'Return',
    pub: 'Publish',
    prev: 'Previous step',
    next2: 'Next Step',
    next: 'Next',
    choose: 'Choose',
    done: 'Done',
    purchase: 'Purchase',
    bn2: 'Buy Now',
    select: 'Select',

    us: 'US',

    details: 'Details',
    phone: 'Phone',
    date: 'Date',
    tsy: 'Transaction Type',
    mt: 'Method',
    oID: 'Order ID',
    st: 'Status',
    tn: 'TradeNo',
    sn: 'Serial No',
    amount: 'Amount',
    remark: 'remark',
    total: 'Total',
    subT: 'Subtotal',
    img: 'Image',

    jobDesc: 'Average fulfillment time ${start}-${end} business days',

    continue: 'continue',

    sku: 'Sku',
    view: 'view',
    record: 'Record',

    // $t('com.addr.')
    addr: {
      o: 'Address'
    },
    tLabel: {
      oCode: 'Order ID',
      tType: 'Transaction Type',
      mt: 'Method',
      amount: 'Amount',
      tNo: 'Transaction No',
      sNum: 'Serial number',
      Status: 'Status',
      pr: 'Processing results',
      pStatus: 'Payment status',
      pMethod: 'Payment method'
    },
    dicData: {
      un: 'Unpaid',
      pa: 'Paid',
      cc: 'Close/Cancel',
      pp: 'Paypal',
      sr: 'System refund',
      paf: 'pay all fees',
      // tradeType 交易类型
      op: 'order pay', //3
      oasr: 'order after sales refund', //4
      cor: 'cancel order refund', //15
      pcor: 'production cancel order refund', //16
      rsr: 'return shipping refund', //17
      rsp: 'return shipping pay', //18
      py: 'transportation costs',
      po: 'payment Guide',
      // 充值方式
      repp: 'PayPal', // 8-paypal
      rebt: 'Bank Transfer', // 3-线下转账
      resr: 'System Refund', // 9-系统退款

      // 充值状态
      reInReview: 'In review', // 0、申请已提交/审核中
      reSuccessed: 'Successed', // 1、通过
      reReviewFailed: 'Review failed', //2，不通过/拒绝

      //提现 交易状态
      ir: 'In review', // 0 审核中
      ss: 'Successed', // 1 成功
      rf: 'Review failed', // 2  审核拒绝
      ps: 'Partial successful', //3.部分成功
      failed: 'Failed', // 4.失败

      workOrderType: {
        pro: 'Products',
        order: 'Order',
        log: 'Logistics',
        cus: 'Customization',
        store: 'Stores',
        ff: 'Functional Feedback',
        other: 'Other'
      }
    },
    submito: {
      success: 'Submitted successfully'
    },
    directions: 'How-to'
  },

  column: {
    username: 'Email',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm password',
    fullName: 'Full name',
    code: 'Verification Code'
  },

  //公共组件
  base: {
    upload: {
      describe: 'Add your order data file',
      desc: 'Less than 1MB'
    },
    folder: {
      placeholder: 'Please select folder',
      default: 'Default save location',
      tools: 'Manage folders',
      create: 'Create new folder',
      defaultText: 'Default',
      edit: 'Edit',
      remove: 'Remove',
      add: 'Add Subfolder'
    },
    msg: {
      title: {
        info: 'Tips',
        warn: 'Tips',
        suc: 'Tips',
        err: 'Tips',
        conf: 'Are you sure?'
      },
      suc: 'Operate successfully',
      delTxt: 'Are you sure you want to delete the row data?',
      copy: 'copy',
      copy1: 'Copy'
    },
    form: {
      select: 'should be selected',
      require: 'is required'
    },
    step: {
      first: 'Connect your online store',
      second: 'Design products and add products sync to store',
      third: 'After successful sales, we will receive orders synchronously',
      four: 'We produce and send your products to customers'
    },
    download: {
      title: 'Download Mockups',
      proNum: 'Product quantity:',
      mockNum: 'Mockups quantity:',
      mockDim: 'Mockups Dimensions:'
    },
    transactionPwd: {
      tPwd: 'Please enter your transaction password',
      rPwd: 'Password is required',
      fPwd: 'Forgot transaction password?',

      t: 'Change transaction password',
      psp: 'Please set your transaction password',
      cp: 'Confirm Password',
      cpRepeat: 'Passwords does not match',
      verify: {
        t: 'Please enter the email verification code',
        d: 'We have sent your verification code to {email}.',
        d1: 'Please fill in the verification code and click continue to reset the transaction password.',
        d2: "If you don't see it, please check the spam mailbox or",
        b: 'resend it',
        s: 'Resend succeeded',
        empty: 'Please enter the verification code',
        ss: 'Successfully set, please initiate payment again',
        sb: 'OK'
      }
    },
    // $t('base.shipping.')
    shipping: {
      ss: 'Standard Shipping',
      es: 'Express Shipping',
      es2: 'Express Shipping *Buyer is responsible for customs clearance and duties.',
      at: 'Air Transport',
      st: 'Sea Transport',
      sf: 'Shipping Fee',
      bi: 'Basic item',
      ras: 'Remote area surcharge',
      ml: 'Modify Logistics',
      osq: 'Obtain shipping quote',
      cq: 'Cancel quotation',
      afq: 'Apply for quotation',
      reminder: {
        title: 'Reminder',
        msg1: 'Submit to obtain shipping quotation',
        addressMsg: 'New shipping address cannot be changed during review'
      },
      cancelReminder: {
        msg1: 'Confirm cancel?',
        msg2: 'The current quotation will be lost.'
      },
      submit: {
        successBtn: 'View order details'
      },
      odr: {
        w: 'wholesale',
        tip: 'For wholesale orders, you need to apply for a freight quote.'
      },
      tip: {
        1: 'Our business people will contact you.',
        2: 'After the staff uploads the order shipping fee, we will inform you via email.'
      },
      // $t('base.shipping.review.')
      review: {
        ir: 'In review',
        ir2: 'In Review',
        tip: 'waiting for shipping quote.'
      },
      // $t('base.shipping.addr.')
      addr: {
        title: 'Modify Address',
        subTitle: 'New Shipping Address',
        osa: 'Old Shipping Address',
        nsa: 'New Shipping Address',
        ma: 'Modify address chance:',
        mac: 'Modify address chance: {count}',
        fa: 'Add new address',
        reminder: 'Confirm modifying address',
        suc: 'your address has been modified.',
        reviewTip: 'Modify address under shipping review',
        confirmTip: 'Please confirm modifying the address',
        recordBtn: 'Address has been modified'
      },
      // $t('base.shipping.bill.')
      bill: {
        title: 'Modify shipping address bill',
        pending: 'Pending platform review of new address shipping costs',
        pay: 'You need to pay',
        refund: 'Refund shipping fee',
        nopay: 'No need to refund or supplement shipping fees.',
        rm: 'Refund method'
      },
      // $t('base.shipping.method.')
      method: {
        chooseTip: 'Please Choose One Shipping Method',
        payment: 'Select after review is completed'
      }
    }
  },
  //自定义组件
  comp: {
    crud: {
      all: 'All',
      sa: 'Select All',
      sd: '{count} selected',
      search: 'Search',
      reset: 'Reset',
      add: 'Add',
      of: 'of',
      idx: 'Index',
      menu: 'Operate',
      edit: 'Edit',
      del: 'Delete',
      conf: 'Confirm',
      cel: 'Cancel',
      delTxt: 'Are you sure you want to delete the row data?',

      date: {
        start: 'Start Date',
        end: 'End Date'
      }
    },
    form: {
      input: 'Please input',
      select: 'Please select',
      errMsg: '${This} is required'
    },
    protoCard: {
      new: 'New',
      def: 'Default',
      cts: 'Creation time↑',
      ctx: 'Creation time↓',
      pLtH: 'Price: Low to high',
      pHtL: 'Price: High to low',
      bestseller: 'Bestseller',
      size: 'size',
      productName: 'Product name',
      code: 'Product code',
      size1: 'Size:',
      resolution: 'Resolution:'
    },
    uploadProShow: {
      addImage: 'Add Image',
      tip: 'Maximum 200 MB (JPG,JPEG,PNG)',
      loadingTxt: 'uploading...',
      modeTip: "Couldn't upload, because we don't accept {mode} image mode. Please try another image.",
      existTip: 'The image already exists.',
      failedTip: 'Image upload failed.',
      ossUploadFail: 'Image upload to OSS failed',
      disabledTip: 'This image has been disabled. Please try uploading another image.',
      cmykTip: 'Unable to upload test.jpg as we do not accept CMYK. Try another image.'
    },
    uploadProgress: {
      clear: 'clear',
      upload: 'Upload',
      succeed: 'Succeed',
      failed: 'Failed'
    },
    hoverPicPopup: {
      size: 'Size'
    },
    doneBtnWrapper: {
      title: 'Tips',
      preview: 'Preview',
      save: 'Save',
      multipleDesign: 'The current product needs to design multiple sizes, and the unDesigned sizes: {sizes}',
      warning: 'Some design areas of the product are not fully covered, please double check or ignore this reminder.',
      content: 'The {name} area design of custom size {size} is partially blank.',
      saveProduct: 'Save',
      readjustment: 'Redesign',
      proShow: 'picture', //效果图
      generated: 'Mockup has not been generated yet. Please try again later.',
      noPicDesign: 'Please add an image design',
      createProduct: 'Creating product, please wait...',
      goToProductList: 'Go to the product list',
      clearUpCanvas: 'Clear up canvas'
    },
    uploadFile: {
      loadingTxt: 'Uploading...',
      slt: 'Please upload no more than ${limit}M files',
      tlt: 'Please upload the ${accept} file',
      notFileType: 'The suffix of a file that is not {fileType}',
      fileSuffixException: '{fileName} file suffix exception, {imageInfoMime} modified to {fileType}',
      fileSuffixException1: 'Upload file exception, can only be in the format of {fileType}',
      typeErr: 'Uploading files can only be in $1 format! (Please ensure that the suffix is lowercase)',
      sizeErr: 'The upload file size cannot exceed $1MB',
      suffixErr: '$1 file suffix exception, $2 has been modified to $3',
      fileTypeEmptySuffixErr: 'Upload file exception, can only be in $1 format!',
      imageInfoEmptyErr: 'Suffix for files other than $1',
      repeatFileErr: 'No duplicate uploads',
      videoErr: 'Video parsing anomaly',
      videoFormatErr:
        'The video encoding of {fileName} is {format}, you can only upload videos with video encoding avc, please transcode it before doing this operation.'
    },
    privacyPolicy: 'ToAddit Term of Service and Privacy Policy',
    recharge: {
      transfer: {
        successConfirm: {
          title: 'Submitted successfully',
          content:
            'We will process your application within 3-15 working days. \n You can view the recharge progress in the <a class="text-primary" href="{path}" target="{target}">Recharge record.</a>',
          confirmButtonText: 'Return'
        }
      },
      onLine: {
        beforeJumpConfirm: {
          message: 'Jump to PayPal balance page.'
        },
        errorConfirm: {
          title: 'recharge failed',
          content1: 'Your payment was not successfully processed, please go back to the payment page and try again.',
          content2: 'If you have any problems, please contact us at service@toaddit.com.',
          confirmButtonText: 'Return'
        },
        successConfirm: {
          title: 'Recharged successfully',
          confirmButtonText: 'Return'
        }
      }
    },
    withdrawal: {
      transfer: {
        successConfirm: {
          title: 'Submitted successfully',
          content:
            'The withdraw process will be processed within 2-15 working days. \n You can view the withdraw progress in the <a class="text-primary" href="{path}">Withdrawls.</a>',
          confirmButtonText: 'Return'
        }
      }
    },
    colorSketchPicker: {
      commonColors: {
        commonColor: 'Common color',
        selected: 'Selected'
      },
      popoverColorPicker: {
        color: 'Color'
      },
      customColors: {
        customColor: 'Custom color'
      }
    },
    feedback: {
      btn: 'Leave a message',
      desc: 'If you encounter any issues related to orders, shipping, product customization, after-sales, etc., please feel free to leave a message with us to follow up on the order situation.',
      contact: 'Please specify a reason for contact',
      selectOne: 'Please select one',
      comment: 'Comment/Question',
      describe: 'Please describe the most important facts, we try to help you solve the problem as quickly as possible',
      upload: 'Upload Attachment',
      email: 'Your Email',
      name: 'Your Full Name',
      leaveMessage: 'Leave a message',
      view: 'View',
      message: 'Message',
      err: 'Attachment upload failed'
    },
    commonCascade: {
      all: 'All',
      common: 'Common'
    },
    allDesign: {
      designOperate: {
        selectFont: 'Select Font',
        fontLoadFailed: '{name} Font Load Failed',
        textLayerEffect: 'Text Layer Effect',
        textShadow: 'Text Shadow',
        margin: 'Margin',
        color: 'Color',
        shadowYOffset: 'Shadow Y Offset',
        shadowXOffset: 'Shadow X Offset',
        shadowBlur: 'Shadow Blur',
        transparentColor: 'Transparent Color',
        clickToPickColorInDesigner: 'Click to Pick Color in Designer',
        textCurvature: 'Text Curvature',
        letterSpacing: 'Letter Spacing'
      }
    }
  },
  //页面
  page: {
    login: {
      title: 'Welcome to ToAddit',
      remark: 'Login and Create your account ,you agree with {policy} ,Thanks',
      withEmail: 'Or with email',
      account: 'Need an account?',
      signUp: 'Sign up',
      forgetPassword: 'Forgot password？',
      option: {
        submitText: 'login'
      }
    },

    register: {
      title: 'Welcome to ToAddit',
      remark: 'By clicking Sign up you agree to {policy}',
      regRemark: 'By clicking Sign up you agree to ToAddit Term of Service and Privacy Policy',
      withEmail: 'Or with email',
      account: 'Have an account?',
      login: 'Login',
      li: 'Log In',
      passwordTip:
        'At least 8 and no more than 16 characters in length including \n one uppercase letter, one lowercase letter and one number',
      msgTip: {
        agreement: 'You must agree to the Terms of Service.'
      },
      option: {
        submitText: 'Sign up'
      },
      invite: 'Sincerely invite you',
      vlinkValid: 'Invitation link invalid'
    },

    registerVerificationCode: {
      back: 'Go back',
      title: 'Welcome to ToAddit',
      subTitle:
        "Fill in the verification code and click continue to register successfully.If you don't see it,please check the spam mailbox or",
      account: 'Return to',
      login: 'Login',
      successAlert: 'For account security, we have sent a verification email to your mailbox {email}.',
      link: 'Setting>Account',
      warningAlert: 'For account security, please supplement your account information and account password in time.',
      successTip:
        'Click the link in the email to reset your password. If you don’t see the email, check your Spam folder.',
      resend: 'resend it',
      option: {
        submitText: 'Continue'
      }
    },

    forgetPassword: {
      title: 'Reset your password',
      subTitle: 'We will email you instructions to reset your password.This may take a few minutes!',
      account: 'Return to',
      login: 'Login',
      successAlert: 'We just sent an email with password reset instructions to {email}',
      successTip:
        'Click the link in the email to reset your password. If you don’t see the email, check your Spam folder.',
      resend: 'Resend Verification Mail',
      msgTip: {},
      option: {
        submitText: 'Reset Password'
      }
    },

    forgetPasswordVerificationCode: {
      title: 'Reset your password',
      subTitle:
        "We have sent your verification code to {email}. Please fill in the verification code and click continue to reset the password. If you don't see it, please check the spam mailbox or",
      account: 'Return to',
      login: 'Login',
      successAlert: 'For account security, we have sent a verification email to your mailbox {email}.',
      successTip:
        'Click the link in the email to reset your password. If you don’t see the email, check your Spam folder.',
      resend: 'resend it',

      option: {
        submitText: 'Continue'
      }
    },

    changePassword: {
      title: 'Change password',
      subTitle: 'Email:',
      account: 'Return to',
      login: 'Login',
      option: {
        submitText: 'Continue'
      }
    },

    // $t('page.odr.')
    odr: {
      all: 'All orders',
      notSynced: 'Not Synced',
      unpaid: 'Unpaid',
      toBePaid: 'To be paid',
      toBePaid12: 'To be Paid',
      awaitingProduction: 'Awaiting Production',
      inProduction: 'In production',
      inProduction2: 'In Production',
      shipped: 'Shipped',
      delivered: 'Delivered',
      completed: 'Completed',
      canceled: 'Canceled',
      returned: 'Return',
      afterSales: 'In dispute',
      failed: 'Failed',
      ref: 'Refund',
      pack: 'Package${index}',
      desc: {
        notSynced: 'You (Accounts:${userName}) created an order waiting for you to synchronize the product.',
        unpaid: 'You (Accounts:${userName}) have finished the product synchronously and are waiting to pay the order.',
        unpaid1: 'You (Accounts:${userName}) created the order and wait for your confirmation of payment.',
        toBePaid: 'Your payment has not been completed. Please pay within 24 hours.',
        toBePaid_echeckStatus:{
          1:'Your payment has not been completed. Please pay within 24 hours.(Electronic check, awaiting confirmation)',
        },
        awaitingProduction:
          'You have completed the order payment, and the order will be sent to the manufacturer after the platform review.',
        inProduction: 'The manufacturer has received the order and is in production.',
        shipped: 'Your order has been packaged and attached with a logistics bill. It is waiting for collection.',
        delivered: 'Your order package has arrived.',
        completed: 'Your order has been completed.',
        canceled: 'You canceled the order.',
        canceled_echeckStatus: {
          3: 'The electronic check has been cancelled.'
        },
        returned: 'You have submitted the return address to return goods.',
        afterSales:
          'You have applied for a refund, and the refund application has been submitted to the platform for processing.',
        failed: `Your payment is abnormal. Please pay again or contact customer service support to solve this problem- ${SERVICE_EMAIL}`
      },
      msg: {
        backTxt: 'Return to order list',

        pr: 'This product has been removed',
        pu: 'As we have modified the printing template of this product, please create new item and replace the originally associated product to avoid issues with the final product, invalid items cannot be ordered.',
        id: 'Image disabled',

        prt: 'Invalid products in order. Remove and re-associate available products, then proceed with payment.',
        pi: 'Product has been taken down. Re-associate SKU of redesigned product and proceed with payment.',
        psd: 'Order not selected Shipping method',

        nls: 'No logistics selected.',

        payErr: 'Successfully created order, payment exception.',
        payAgain: 'Please pay the order again.'
      },
      // $t('page.odr.dia.afterSales.')
      dia: {
        afterSales: {
          title: 'After-sales service',
          btn: 'Refund application',
          o: 'After sales order',
          t: 'Application time',
          imgDesc: 'Please upload a picture of damaged products as evidence so that we can handle your refund request.'
        }
      },
      valid: {
        err: 'Please change the order information and re-upload it.',
        orderCode: 'Order ID ${orderCode} corresponds to ${list} multiple ${key}',
        oe: 'Order ID cannot be empty',
        of: 'Order ID only supports English, numbers and hyphen and within 27 characters.',
        se: 'Please fill in SKU',
        sf: 'SKU cannot exceed 64 characters',
        qe: 'Quantity cannot be empty',
        fe: 'Full name cannot be empty',
        pe: 'Phone number cannot be empty',
        ee: 'Please fill in the Shipping Way',
        ef: 'Please fill in Standard Shipping or Express Shipping',
        ce: 'Countries or Areas cannot be empty',
        cf: 'Please fill in the correct countries or Areas',
        spe: 'State/Province/Region cannot be empty',
        citye: 'City cannot be empty',
        ze: 'ZIP code cannot be empty',
        ae: 'Address 1 cannot be empty',
        ue: 'The uploaded file data is empty'
      },

      rod: 'Refresh order data',
      co: 'Create',
      oi: 'Order import',
      io: {
        btn: 'Import Orders',
        title: 'Import orders from your spreadsheet',
        up: {
          t: 'Add file',
          d: 'Support for txt, xls file import less than 1MB'
        },
        suc: '{total} orders will be created. You can click the button to submit data.',
        err: '{total} orders will be created. {failCount} orders have some issues. Check these cells in the file'
      },
      oc: 'Confirm',
      Rel: 'Related',
      sync: 'Sync',
      pro: {
        s: 'Synced',
        nss: 'Not Synced SKU',
        ti: 'ToAddit item',

        pr: 'Product has been removed',
        rd: 'Invalid',
        empty: 'No orders',

        syncTip: 'Select the product you want to associate with',

        ignore: {
          t: 'Ignoring products',
          c1: 'Confirm ignoring the product variant?',
          c2: 'This product will not be synchronized again in the future.',
          c3: 'Ignoring this product in other orders',
          tips: 'tips: Except for orders that are in the process of freight application and have completed the freight application.'
        }
      },
      prodS: {
        btnText: 'Production status',
        title: 'Production schedule',
        pi: 'Product information',
        pc: 'Product code',
        s: 'size',
        sku: 'sku',
        ftn: 'Factory tracking number'
      },

      echeckStatus:{
        ec:'Electronic check',
        tbc: 'To be confirmed',
        complete: 'Complete',
        cancelled: 'Cancelled'
      },

      ps: 'Personal Store',
      nps: "Don't have a personal store yet?",
      ah: 'Add Here',

      ca: 'Cancel automatically',
      eod: 'externalOrderCode:',

      mo: 'Manual order',
      po: 'Personal order',

      ct: 'Check out',
      tax: 'Tax',
      newTax: 'New tax',
      sd: 'Shipping Discount',
      pd: 'Product Discount',

      ss: 'Please select store type',
      eop: 'Enter order id or product sku',
      eeon: 'Enter externalOrderCode',
      customer: 'search customer',
      waybill: 'logistics tracking number',
      waybillInfo: 'Logistics Information',

      to: 'ToAddit Order',
      o: 'Order',
      o0: 'order',
      os: 'Orders',
      os0: 'orders',
      wos: 'Wholesale orders',
      ois: 'Order items',
      or2: 'Order Review',
      pi2: 'Products Information',
      oS: 'Order status',

      ship: 'Shipping',
      ss2: 'Standard Shipping',
      es2: 'Express Shipping',
      sm2: 'Shipping Method',
      sms2: 'Shipping Methods',
      sa2: 'Shipping Address',
      wng: 'Waybill number not generated',
      ml: 'Modify Logistics',
      ssm: 'Select Shipping Method',
      sf: 'Shipping Fee',
      l: 'Logistics',
      nsr: 'No shipping results',
      nss: 'Not Supported Standard Shipping',
      nes: 'Not Supported Express Shipping',

      sot: 'Sample order template.xls',
      acc: 'Alpha-2 Countries or Areas code.xls',
      oii12: 'Order import Introduction',

      upq: 'No. of uploaded products',
      pas: 'Imported successfully',
      uti: 'Import failed',
      return: {
        send: 'Delivery of goods to designated address',
        ra: 'Return address',
        tip: 'Fees for products in production are not refundable, and the shipping fee will be refunded to your account within one business day (refund freight: $${freight})',
        rejTip:
          'Read it ↓' +
          '<br/>' +
          '*If the order you want to cancel is already in production, the product will be destroyed by default.' +
          '<br/>' +
          '*Fees for products in production are not refundable, and the shipping fee will be refunded to your paypal account within one business day (refund freight: $${freight})'
      },

      // $t('page.odr.t.')
      t: {
        str: 'Store',
        oid: 'Order ID',
        eoc: 'externalOrderCode',
        tao: 'ToAddit Order',
        cus: 'Customer',
        sta: 'Status',
        tra: 'Tracking',
        tot: 'Total',
        d: 'Date',

        pro: 'Products',
        ads: 'Address',

        oi: 'Order items',
        cs: 'Color/Size',
        sku: 'SKU',
        qua: 'Quantity',

        transType: 'Transaction Type',
        transNo: 'Transaction No',
        Serial: 'Serial number',

        ws: 'Please select logistics',
        lnm: 'Logistics not yet matched',
        nssTip: 'Please select logistics after completing the product association'
      },

      // $t('page.odr.detail.')
      detail: {
        apro: 'Add at least one product',
        cancelOdr: 'Cancel order',
        cDesc: 'ToAddit dispose the product',
        rDesc: 'Ship to a new address',
        cm: 'Are you sure you want to cancel the order?',
        rm: 'Your refund will be returned to your account within one working day.',

        confOdr: 'Confirm Order',
        copyOdr: 'Copy order',
        sureCopy: 'This will create a new order with all the details from the existing one.',
        confPro: 'Confirm product',
        detail: 'product information',
        placeOdr: 'Place order',
        createSuc: 'Created Successfully',
        createCont: {
          notSynced: 'The order has been copied. The order status is "Not Synced".',
          unpaid: 'The order has been copied. The order status is "Unpaid".'
        },

        collect: 'Collect ${num} product information',
        view: 'View all ${num} order product information',

        alert: {
          toBePaid:
            'Please pay as soon as possible, your order will be automatically cancelled by the system within ${countDown}',
          failed: 'Failure reason: Payment failure',
          ioss: 'Starting July 1st, 2021, ToAddit will collect import VAT on orders shipped to the EU countries listed below. ToAddit will submit the taxes collected to the logistics carriers to ensure your packages clear customs. If you provide an IOSS number, then ToAddit will not collect the taxes from you.',
          iossLink: 'Billing/EU and UK VAT'
        },
        title: {
          checkout: 'Checkout',
          create: 'Create order',
          personal: 'Manual orders',
          sync2: 'Synced Items',
          ship2: 'Shipping Information'
        },
        // $t('page.odr.detail.empty')
        empty: {
          bill: 'Show order summary after editing address',
          ship: 'Please Edit your Shipping address',
          shipping1: 'Please add an address first',
          shipping: 'There are no shipping methods available for your order.',
          contact: `Please contact at ${SERVICE_EMAIL}`
        },
        t: {},
        back: 'Back to My Orders'
      },

      // $t('page.odr.refund.')
      refund: {
        1: 'Platform refund',
        2: 'PayPal acceptance',
        3: 'Refund succeeded',
        rps2: 'Refund Products',
        rfr: 'Reason for return',
        sd: 'Situation description',
        sdph: 'Please describe your situation',
        rq: 'Refund quantity',
        title: {
          ing: 'Refund processing',
          suc: 'Refund succeeded',
          reject: `Abnormal refund. Please contact at ${SERVICE_EMAIL}`,
          underReview: 'Refund processing',
          shipped: {
            underReview: {
              title: 'Please wait for the platform to process',
              value:
                'You have successfully initiated the after-sales service application. Please wait patiently for the ToAddit platform to process.',
              label1: 'ToAddit warn',
              value1:
                'After the platform agrees, the system will refund to your payment account.If the platform refuses, you can modify the refund application and initiate it again. The platform will process it again.'
            },
            reject: 'After sale has been rejected'
          }
        },
        type: {
          o: 'Refund type',
          awaitingProduction: 'Refund for cancelled order (Awaiting Production)',
          inProduction: 'Refund for cancelled order (In production)',
          shipped: 'After sales refund'
        },
        amount: {
          o: 'Refund amount',
          total: 'Total refund amount'
        },
        time: {
          suc: 'Refund success time',
          reject: 'Refund success time',
          underReview: 'Cancellation time',
          completion: 'Refund completion time'
        }
      },
      // $t('page.odr.pay.')
      pay: {
        btn: {
          o: 'Pay',
          s: 'Submit',
          sd: 'Save as draft'
        },
        pc: 'Jump to PayPal payment order page.',
        pSuc: 'Payment success',
        pSucf: 'Payment successful',
        pF2: 'Payment Failed',
        pFc1: 'Your payment was not successfully processed, please go back to the order page and try again.',
        pFc2: `If you have any problems, please contact us at ${SERVICE_EMAIL}`,
        pFb: 'Tips: Payment exceptions may be caused by the browser blocking pop-up windows. If this is the problem, please lift the pop-up window restriction and make the payment again',
        pa: 'Payment amount',
        pt: 'Payment time',
        ps: 'Payment status',
        pm: 'Payment method',
        pm2: 'Payment Method',
        pms2: 'Payment Methods',
        b: 'Balance',
        bt: 'Bank Transfer',
        bi: 'Current balance is insufficient, please recharge',
        pf: 'Payment freight',
        fresh: 'Fresh',
        freshTxt: 'The order amount data has been updated,\n please refresh the page data.',
        freshTxt1: 'The order data has been updated,\n please refresh the page data.',
        title: {
          b: 'Billing',
          os2: 'Order Summary',
          as2: 'Summary'
        }
      },
      step: {
        // $t('page.odr.step.afterSales.suc.')
        afterSales: {
          1: 'Apply for after-sales service',
          2: 'Approval Pending',
          3: 'After sales completed',
          rej: {
            title: 'After sale has been rejected',
            time: 'Review time',
            reason: 'Reason',
            btnText: 'Reapply after sale'
          },
          rev: {
            1: 'Please wait for the platform to process.',
            desc1:
              'You have successfully initiated the after-sales service application. Please wait patiently for the ToAddit platform to process.',
            2: 'After the platform agrees, the system will refund to your payment account.',
            3: 'If the platform refuses, you can modify the refund application and initiate it again. The platform will process it again.'
          }
        },
        returned: {
          1: 'User applies for return',
          2: 'Platform delivery',
          3: 'The package has been signed',
          viewRecord: 'View refund flow record',
          title: {
            1: 'The user applied for return and paid the return freight successfully',
            record: 'Billing Records',
            addr: 'Return Address',
            ship: 'Shipping Method',
            2: 'Platform returned order freight'
          }
        }
      },

      // $t('page.odr.create.')
      create: {
        shipping: 'Please fill in the shipping address first',
        confSave: 'Wanna finish this later?',

        bulkAddConf: 'Bulk selection will have a default color size, please modify your own to the desired product'
      },
      // $t('page.odr.noticePay.')
      noticePay: {
        m: 'The products in this order may be divided into several packages for shipping due to their large size. There are two options:',
        m1: '-Agree to receive multiple packages and proceed with the payment.',
        m2: '-If you do not agree, our sales representative will contact you and provide you with a better solution.',
        cab: 'Awaiting Sales Rep Contact',
        cob: 'Agree & Pay'
      },

      // $t('page.odr.wholesaleChange.')
      wholesaleChange: {
        0: {
          unpaid: 'After the product information is modified and the order is changed to a regular order, you need to select the logistics again and confirm whether the change is made or not.',
          toBePaid: 'After the product information is modified, the order will be changed to a regular order and the order status will be changed to an unpaid order, so you need to choose the logistics again and confirm whether the change is made or not.'
        },
        1: {
          unpaid: 'When the product information is modified and the order is changed to a wholesale order, it is necessary to re-select the logistics to confirm the freight charges and confirm whether the change is made or not.',
          toBePaid: 'After modifying the product information, the order will be changed to wholesale order and the order status will be changed to unpaid order, you need to choose the logistics again to confirm the shipping cost and confirm whether to change or not.'
        }
      }
    },
    // $t('page.pro.')
    pro: {
      o: 'Product',
      os: 'Products',
      c: 'Color',
      c0: 'color',
      s: 'Size',
      s0: 'size',
      qty: 'Qty',
      qty2: 'QTY',
      p: 'Price',
      up2: 'Unit Price',
      retail: 'Retail price',
      itP: 'ToAddit price',
      bp: 'Bulk price',
      sa: 'Starting at',
      sku: 'SKU',
      q: 'Quantity',
      is0: 'items',
      design: 'Design',
      sc: 'Style code',
      in: 'Image name',

      allPs: 'All products',
      name: 'Product name',
      nameP: 'Search Product name',
      styleP: 'Search Style code',
      variants: 'Variants',
      ToAdditI: 'ToAddit item',
      ap: 'Add product',
      apto: 'Add product to order',
      sp2: 'Select Product',
      pns: 'Product name&SKU',
      fn: 'File name',
      material: 'material',
      process: 'production process',
      market: 'marketing classification',
      proShip: 'Shipped',
      proInP: 'In production',
      proDone: 'Delivered and signed for by the customer.',
      a: 'Association',
      nss22: 'Not Synced SKU',
      nps: 'New products',
      nps2: 'New Products',
      mp: 'My product',
      sDot: 'search...',
      productName: 'Product name',
      code: 'Product code',
      imageName: 'Image name'
    },
    folder: {
      name: 'Folder name',
      warning: 'The folder name may not be greater than 64 characters',
      change: 'Change folder',
      download: 'Download files',
      del: 'Delete',
      edit: 'Edit folder name',
      remove: 'Are you sure you want to remove this folder?',
      add: 'Add subfolder',
      create: 'Create new folder',
      cancel: 'Cancel',
      save: 'Save',
      sub: 'Subfolder name',
      lenLimit: 'Please enter 2-30 characters',
      remTip: 'All pictures in the folder will be completely deleted and cannot be recovered.',
      success: 'Operation succeeded',
      rem: 'Yes,remove',
      sel: 'Please select picture first',
      undown: 'Unable to download invalid product  mockups',
      noVal: 'Sorry, there are no valid pictures',
      information: 'Image Information',
      delete: 'Yes,delete',
      conDel: 'Are you sure you want to delete these images?',
      conDel1: 'Are you sure you want to delete this image?',
      delTip1: 'This image is used by <span style="color: #384edb">$total</span> products in the product library.',
      delTip2:
        'Deleting this image will also delete <span style="color: #384edb">$total</span> custom products. Are you sure you want to proceed? ',
      delTip3: 'These images are used by <span style="color: #384edb">$total</span> products in the product library.',
      delTip4:
        'Deleting these images will also delete <span style="color: #384edb">$total</span> custom products. Are you sure you want to proceed? ',
      delTip5: 'Tips：Including deleting customized products that have been removed from the shelves.',
      delTitle: 'Delete file',
      imgName: 'Image name',
      imgReq: 'Image name is required',
      less200: 'Image name can not be longer than 200 characters.',
      down: 'Download File',
      design: 'Product design',
      disabled: 'Image is disabled',
      unDown: 'Unable to download disabled images',
      upload: 'Upload new file',
      uploading: 'Uploading...',
      clear: 'Clear',
      found: 'results found in all images',
      unChange: 'Unable to move disabled images',
      deleteAll: 'Are you sure you want to delete these products?',
      create1: 'You are creating a new folder in $folder'
    },
    productTemplates: {
      editProductDetail: 'Edit Product details',
      mockupDownload: 'Download Mockups',
      redesign: 'Redesign',
      var: 'Variant information',
      sg: 'Size guide',
      recustom:
        'As we have modified the printing template of this product, please create new item and replace the originally associated product to avoid issues with the final product, invalid items cannot be ordered.',
      delete: 'Delete',
      export: 'export variant information',
      info: 'variant information',
      create: 'Create new products',
      detail: 'Product Details',
      template: 'Template',
      code: 'Product Code:',
      dropdownList: [
        {
          label: 'Edit Product details',
          value: 'edit'
        },
        {
          label: 'Download Mockups',
          value: 'download'
        },
        {
          label: 'Redesign',
          value: 'redesign'
        },
        {
          label: 'Delete',
          value: 'delete'
        }
      ],
      option: {
        column: {
          name: {
            searchPlaceholder: 'Templates name, product name'
          },
          category: {
            searchPlaceholder: 'All products'
          },
          order: {
            searchPlaceholder: 'Created：newest first'
          },
          newestOrder: 'Created: newest first',
          oldestOrder: 'Created: oldest first',
          sku: 'SKU',
          productName: 'Product name',
          code: 'Product code',
          imageName: 'Image name',
          sort: 'Sort'
        }
      },
      ats: {
        ses: 'Select Store',
        store: 'store',
        title: 'Add To Store',
        ps: 'Personal ToAddit store',
        ss: 'Shopify Store',
        etsy: 'Etsy Store',
        os: 'Operation successful! Click to',
        tv: 'to view progress',
        max50: 'Choose no more than 50 products',
        noExists: 'The product list does not exist',
        error: 'Product list data abnormality',
        unPublish: `The selected products that cannot be released due to the use of certain disabled fonts are：{errList}`
      }
    },
    combination: {
      sku: 'Synthetic code',
      name: 'Product name',
      info: 'Product information',
      pic: 'Product picture',
      date: 'Date',
      design: 'Batch design',
      view: 'view',
      content: `Our "Batch Design" feature is designed to enhance the user's customization experience and help you quickly generate multiple customized products. Users can easily select multiple products and upload multiple pictures at the same time, and the system will automatically generate personalized designs that meet your requirements..`,
      guide: 'How-to Combination'
    },
    allProducts: {
      all: 'All product',
      filter: 'Filter by',
      clean: 'Clear',
      Categories: 'Categories',
      iName: 'englishItemName',
      eps: '1500+ products',
      nas: 'New Arrivals',
      tweys: 'That Will Elevate Your Style',
      option: {
        column: {
          englishNameLike: {
            searchPlaceholder: 'Search for products'
          },
          orderItems: {
            searchPlaceholder: 'Creation time↓'
          }
        }
      }
    },
    // $t('page.billing.')
    // 账单
    billing: {
      pys: 'Payments',
      abl: 'Account Balance',
      USD: 'USD',
      op: 'Order payment',
      rpf: 'Modify address freight payment',
      cor: 'Refund for cancelled order (Awaiting Production)',
      cor1: 'Refund for cancelled order (In Production)',
      rfr: 'Modify address freight refund',
      asr: 'After sales refund',
      bl: 'Balance',
      export: 'Export Billing Records',
      ReExport: 'Export Recharge Records',
      withExport: 'Export Withdrawal Records',
      table: {
        br: 'Billing Records',
        rc: 'Recharge',
        wd: 'Withdrawals'
      },
      // $t('page.billing.rechargeDialog.')
      rechargeDialog: {
        t: 'Recharge',
        t1: 'Transfer Recharge',
        rm: 'Recharge Method',
        td: 'Transfer will be processed within 1-3 working days after submission',

        rai: 'Receiving Account Information',
        tm: 'Transfer Method',
        tr: {
          account: 'Account',
          an: 'Account name',
          ca: 'Company address',
          anum: 'Account number',
          bc: 'Bank code',
          bsb: 'BENEFICIARY’S BANK',
          sc: 'Swift code',
          brc: 'Branch code',
          a: 'Address',

          pn: 'Payer name',
          tid: 'Transfer ID',
          contactMobile: 'Phone (Optional)',
          email: 'E-mail (Optional)',
          rvu: 'Remittance voucher upload'
        },

        n: 'Next'
      },
      // 提现弹框
      withdrawal: {
        cb: 'Current balance',
        WM: 'Withdrawal Method',
        maxAmount: 'Max withdrawable amount:',
        ppMessage: 'PayPal withdrawal requirements',
        message1: 'The recharge time has exceeded',
        message2: 'days;',
        message3: 'Recharge records shall not exceed 180 days;',
        btMessage: 'Bank transfer withdrawal requirements',
        btMessage1:
          '<p>1.For each draw, the intermediate bank is expected to charge a handling fee of </p><p>approximately $12.75 per transaction,and the actualdraw amount is based on</p><p>the actual receipt;</p> ',
        btMessage1_2:
          '<p>2.For each draw, the intermediate bank is expected to charge a handling fee of </p><p>approximately $12.75 per transaction,and the actualdraw amount is based on</p><p>the actual receipt;</p> ',
        btMessage2: 'The bank transfer withdrawal is expected to take 3-7 working days to process.',
        paypalMax: 'The current maximum withdrawal amount for PayPal is',
        BankTransferMax: 'The current maximum withdrawal amount for Bank Transfer is',
        wa: 'Withdraw amount',
        mm: 'Minimum:',
        wc: 'Withdraw charge:',
        ibfc: 'lntermediate bank floating charges',
        eaar: 'Estimated actual amount received:',
        remark: 'Receiving account and other notes',
        placeholder: 'Please enter your bank receiving account number',
        // 警告
        warn: {
          minWarn: 'The withdrawal amount cannot be less than the minimum withdrawal amount',
          maxWarn: 'The withdrawal amount cannot be greater than the maximum withdrawal amount'
        }
      },
      wdTitle: 'Withdrawal',
      wdText: 'withdrawal',
      // 充值列表
      recharge: {
        detail: 'Detail',
        failedInfo1: 'The recharge application has been submitted for review by platform personnel.',
        failedInfo2: 'The audit will be processed within 1-3 working days.',
        failedInfo3: 'Review failed',
        Reason: 'Reason:'
      },
      // 充值失败信息
      reLabel: {
        M: 'Method',
        pName: 'Payer name',
        po: 'Phone(Optional)',
        Amount: 'Amount',
        rvu: 'Remittance voucher upload'
      },
      // 提现列表
      withdrawalList: {
        wa: 'Withdraw amount',
        wc: 'Withdraw charge',
        result: 'The withdrawal application has been processed, please check it carefully',
        Amount: 'Amount',
        PAmount: 'Process Amount'
      },
      type: {
        p: 'Paypal'
      },
      msg: `From July 1, 2021, Toaddit will impose value-added tax on orders from 27 EU countries / regions. Toaddit will submit the collected tax to the logistics provider to ensure the customs clearance of your package.
      VAT will change dynamically according to the percentage required by 27 EU countries. National tax rate levied click <span style="color:blue;"><a target="_blank" href="https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm#shortcut-7">here</a></span> to view.
      If you provide IOSS tax number, Toaddit will not tax your order. You should fill in the true tax number correctly. If the package card closing platform is caused by incomplete information, you will not be responsible.
      <span>Modification of the tax code will be synchronized to the pending and unpaid orders, please confirm before modification!</span>`,
      // 税
      euVAT: 'EU and UK VAT',
      column: {
        IOSS: 'IOSS Tax number',
        UK: 'UK tax number'
      },
      Sub: 'Submit',
      add: 'Create',
      edit: 'Edit',
      Cancel: 'Cancel'
    },

    account: {
      myAct: 'My Account',
      edit: 'Edit',
      save: 'Save',
      cancel: 'Cancel',
      changePwd: 'Change password',
      connect: 'Connect',
      disconnect: 'Disconnect',
      sc: 'Save changes',
      change: 'change',
      newPwd: 'New password',

      t: {
        timezone: 'Timezone',
        timezone2: 'Time zone',
        name: 'name',
        personalInfo: 'Personal information',
        pwd: 'Password',
        socialActs: 'Social accounts',
        fullName: 'Full name',
        email: 'Email',
        phone: 'Phone',
        confirmPwd: 'Confirm Password'
      },

      err: {
        notMatch: 'The two passwords you entered did not match'
      }
    },

    // $t('page.address.')
    address: {
      addr: 'Address',
      add: 'Add address',
      edit: 'Edit Address',
      del: 'Yes,delete',
      warning: 'Are you sure you want to delete this address?',
      info: 'Please add the address to use when creating an order .',
      use: 'Use this address',
      ana: 'Add new address',
      add22: 'Add New Address',
      select: 'Select other address',
      selects: 'Select other addresses',
      save: 'Save to your address list',

      t: {
        fullName: 'Full name',
        phone: 'Phone',
        country: 'Countries or Areas',
        state: 'State/Province/Region',
        s: 'State',
        addr1: 'Address1',
        addr2: 'Address2(optional)',
        a2: 'Address2',
        city: 'City',
        code: 'ZIP code'
      }
    },

    //定制产品详情页
    productsDetail: {
      Price: 'Price',
      Wholesale: 'Wholesale',
      Pieces: 'Pieces',
      Material: 'Material',
      Weight: 'Weight',
      pTime: 'Production time',
      code: 'Product code',
      sPrice: 'Shipping Price',
      ushipping: 'United States / Standard shipping',
      color: 'Color',
      size: 'Size',
      sGuide: 'Size guide',
      sDesign: 'Start Designing',
      download: 'Download Mockup & Template',
      desc: 'Description',
      ship: 'Shipping',
      sDesc:
        'All measurements in the table refer to product dimensions.Product measurements may vary by up to 2" (5 cm).',
      table: {
        Centimeter: 'Centimeter',
        Inch: 'Inch'
      },
      weight: 'Weight',
      Region: 'Region',
      sShip: 'Standard Shipping',
      eShip: 'Express Shipping',
      fTime: 'Average fulfillment time',
      sTime: ' business days',
      fItem: 'First item',
      nItem: 'Next item',
      rDesc: 'Region description',
      country: 'Countries or Areas',
      title: 'ToAddit Shipping Zone Explanation',
      aIntroduce: 'At present, ToAddit adopts the solution of charging freight by Region',
      bIntroduce: 'The areas are divided as follows',
      recommendTitle: 'You might also like',
      BackToTop: 'Back to top',
      fbaSuggestion: 'Suggestions for bulk packing',
      boxDetail: {
        size: 'Size',
        volume: 'Volume',
        weight: 'Weight'
      },
      fbaTableColum: {
        sizeName: 'Size',
        expectPackedCount: 'Expected number of packages(pieces)',
        expectPackedTotalVolume: 'Expected total package volume (cm³)',
        expectPackedTotalWeight: 'Expected total package weight (g)'
      },
      cartonDiagram: {
        title: 'Carton diagram',
        allBox: 'All cartons',
        name: 'Carton model',
        $volume: 'External volume (cm)',
        weight: 'Carton weight (KG)'
      }
    },

    //定制器
    designContainer: {
      error: 'Error',
      dataExceptionCurrentSizeMismatch:
        'Data exception, the current listing reference size does not match the re-designed reference size, unable to proceed with re-design!',
      dataExceptionImageDisabled:
        'Data exception, the original image {errList} has been disabled, unable to proceed with re-design!',
      dataExceptionImageDeleted:
        'Data error: Original images {uniqNoExistImageIds} have been deleted and cannot be redesigned.',
      styleAlreadyModified: 'Style has already been modified',
      fontAlreadyDisabled: 'The use {errList} fonts has been banned',
      fontNotFoundReplaced: '{fontName} font does not exist or has been replaced with other fonts.',
      reDesignNoMatch:
        "The data is abnormal. The current reference size on the shelf is inconsistent with the redesigned reference size, so we can't redesign it!",
      reCustomSyncToOrder: {
        message:
          'The redesigned product will be synchronized with the pending orders.\nOrder status: Not Synced、Unpaid、 To be paid、Awaiting Production.',
        cancelButtonText: 'No，Save Design Only'
      },
      productSelected: 'The current product has been selected.',
      header: {
        title: 'Create a product template',
        background: 'Background',
        layers: 'Layers',
        easyMode: 'Easy Mode',
        standardMode: 'Standard Mode',
        clearUp: 'Clear up',
        deleteCurrentArtwork: 'Delete current artwork',
        deleteAll: 'Delete all',
        dpi: {
          good: 'Good',
          average: 'Average',
          adjust: 'Adjust',
          poor: 'Poor'
        }
      },
      tabs: {
        allProducts: 'Products',
        allProductsColumn: {
          column: {
            name: {
              searchPlaceholder: 'Search for products'
            },
            title: {
              searchPlaceholder: 'Search for picture'
            }
          }
        },
        //公共图片
        myImage: 'Image',
        //我的图片
        designLibrary: 'Discover',
        text: 'Text',
        background: 'Fill'
      },
      text: {
        fontSetting: {
          addText: 'Add Text',
          enterFontName: 'Enter the font name',
          fontListCannotBeEmpty: 'Font list cannot be empty',
          selectTextLayerToProceed: 'Please select a text layer before proceeding',
          reloadFontLibrary: 'Reload Font Library',
          editText: 'Edit Text'
        }
      },
      background: {
        applyAll: 'applyAll'
      },
      main: {
        designReminder:
          ' Try to avoid designing patterns at dashed lines as it may cause pattern deviation due to size and cutting.',
        recommendedImageSize: 'Recommended Size',
        printQuality: 'Print quality',
        low: 'Poor',
        lowDetail: 'Based on experiential evaluation, there may be some discrepancies with actual production.',
        high: 'High',
        copyTo: 'Copy to',
        allLayers: 'All Layers',
        copySizeDataTo: 'Copy size data to',
        allSize: 'All size',
        warningTip0:
          'Image enlargement: Exceeds 9 times (width * height > 9), and some small details in the enlarged image may appear blurry.',
        warningTip1:
          'Image reduction: Less than 0.25 times (width * height < 0.25), and the reduced image will lose some details.',
        multipleSizeAddSize: 'Confirm to add pictures to all sizes',
        multipleSizeDeleteSize: 'Confirm to delete pictures to all sizes',
        oneDesignToStandard:
          'After the mode is switched, the original design data will be cleared and  \n  the design image will be switched to the standard mode.', //一键定制切换专业定制
        standardToOneDesign: 'After switching mode, the original design data will be cleared.',
        prototypeTakenOff: 'The prototype has been taken off the shelf and cannot be customized.',
        referSizeMatchFail: 'The data is abnormal. The reference size for redesign failed to match.'
      },
      operation: {
        size: 'Size',
        pictureOperation: 'Picture operation',
        //无图片下提示
        operationalRequirements: 'Operational requirements',
        case1: 'case1',
        case2: 'case2',
        lineHeight: 'Line Height',
        //定制提示
        case1Tip: 'Please make sure your text or important elementsare placed in a safe area.',
        case2Tip: 'Be sure to cover your picture with solid lines toavoid white edges during sewing.',
        selectLayerPrompt: 'Please select the layer you want to operate on',
        //图片操作
        layerOrder: {
          title: 'Arrange',
          iconTip: {
            bringToFront: 'Bring to Front',
            sendToBack: 'Send to Back',
            bringForward: 'Bring Forward',
            sendBackward: 'Send Backward',
            duplicate: 'Duplicate',
            delete: 'Delete'
          }
        },
        align: {
          title: 'Align',
          iconTip: {
            leftEdges: 'Left Edges',
            horizontal: 'Horizontal Center',
            rightEdges: 'Right Edges',
            topEdges: 'Top Edges',
            verticalCenter: 'Vertical Center',
            bottomEdges: 'Bottom Edges'
          }
        },
        rotate: {
          title: 'Rotate',
          iconTip: {
            rotate30Degrees: 'Rotate 30 Degrees',
            'Rotate-30Degrees': 'Rotate -30 Degrees',
            flipHorizontal: 'Flip Horizontal',
            flipVertical: 'Flip Vertical'
          }
        },
        scale: {
          title: 'Scale'
        },
        stretch: {
          title: 'Stretch',
          iconTip: {
            adapt: 'Adapt',
            fill: 'Fill',
            maximumWidth: 'Maximum Width',
            maximumHeight: 'Maximum Height',
            stretching: 'Stretching'
          }
        },
        tiling: {
          title: 'Tiling',
          iconTip: {
            normal: 'Normal',
            basic: 'Basic',
            mirror: 'Mirror',
            halfBrick: 'Half Brick',
            halfDrop: 'Half Drop'
          }
        },
        spacing: {
          title: 'Spacing'
        },
        opacity: {
          title: 'Opacity',
          iconTip: {
            opacity: 'Opacity'
          }
        },
        fontSize: {
          title: 'Multi',
          iconTip: {
            leftAlign: 'Align multi-line text to the left',
            centerAlign: 'Align multi-line text to the center',
            rightAlign: 'Align multi-line text to the right',
            lineHeight: 'Line height of multi-line text'
          }
        },
        specialEffects: {
          title: 'Special',
          iconTip: {
            italic: 'Italic'
          }
        },
        globalPreview: 'Global Preview'
      }
    },

    batchDesignContainer: {
      productImageFailed: 'Product image calculation failed',
      multiMaterialArrangement: 'Multi material arrangement',
      singleMaterialArrangement: 'Single material arrangement',
      productUploadException: 'Product image upload exception',
      receivedAbnormalData: 'Received abnormal data',
      dialogMask: {
        redesign: 'Redesign',
        view: 'View',
        delete: 'Delete'
      },
      batchOperationOption: {
        fill: 'Fill',
        adapt: 'Adaptive',
        mirror: 'Mirror'
      },
      saveDialog: {
        synthesis: 'Confirm synthesis',
        selectedDataEmpty: 'Please select the data you want to combine before proceeding with this operation.',
        dewWhite: 'There are white areas in the prototype({errMsg}). Are you sure you want to continue synthesizing?',
        prototypeNeedPicture:
          'Each prototype requires at least one custom image, No custom image for the prototype({errMsg}) to continue synthesizing.',
        column: {
          productName: 'product name',
          syntheticSku: 'synthetic code'
        }
      },
      selectBtn: {
        btnTip: '{selectedNum} have been selected, You can also add ({residueNum}).',
        btnTxt: 'Add',
        prototypeTitle: 'Add products',
        pictureTitle: 'Add image',
        backgroundTitle: 'Add background (optional)',
        backgroundTitle1: 'Add filled color',
        prototypeEmpty:
          'Can not find under the category or the style does not exist, or do not support [batch design], if necessary, please contact customer service.',
        picture: {
          myImage: 'My Image',
          discover: 'Discover',
          column: {
            title: 'title'
          }
        },
        background: {
          addSelectedColor: 'Add selected color',
          colorCodeError: 'The color code is abnormal, Cannot add anymore.',
          colorLimit: 'The color limit has been reached, Cannot add again.',
          colorCodeExist: 'The selected color code already exists, Cannot add anymore.'
        }
      }
    },

    helpCenter: {
      caption: 'ToAddit Help center',
      placeholder: 'Ask us a question...',
      results: '$total results for <span style="color: #384edb">"$keyWord"</span> in All Categories',
      none: 'No results for <span style="color: #384edb">“$keyWord”</span><br/> <div style="margin-top: 10px">Try searching another keyword.</div>',
      article: 'Articles',
      help: 'Hi there! How can we help?'
    },

    notice: {
      ann: 'Announcement',
      enter: 'Please enter keywords to search',
      title: 'Title',
      category: 'Category',
      date: 'Date',
      none: 'No results for "$keyWord" \n Try searching another keyword.',
      notPop: 'This announcement will not pop up again',
      view: 'View All',
      previous: 'Previous',
      next: 'Next'
    },

    summer: {
      shop: 'SHOP NOW',
      trend: 'Trending Now',
      hot: 'Hot sale',
      design: 'Start Designing >',
      view: 'View More',
      arrivals: 'New Arrivals',
      start: 'Start Your Summer Fashion Journey',
      air: ['Worldwide Shipping', 'Avaliable as Standard or Express delivery', 'Learn more'],
      cart: ['No order minimums', 'Track order from producing to shipping. Get', 'everything in control.'],
      kefu: ['One-on-One customer', 'We pledge to respond within 24 hours'],
      baozhang: [
        'Quality assurance',
        'With stringent QC dept. to ensure that you receive',
        'products that meet your satisfaction.'
      ],
      see: 'See where you can find us and how you can',
      get: 'get in touch with us',
      feature: 'Personalization feature',
      have: ['We have Selected a series of must-have summer', 'items to bring you the summer style.'],
      saleTitleList: [`Men's casual suit`, 'Two-piece Swimsuit', 'Bath Towel'],
      arrivalList: ['Classic cap', 'Adult Crocs Shoes', '20oz Tumbler'],
      contact: 'Contact us',
      sorry: 'Sorry, this product is not on the shelf, you can contact customer service!',
      question: 'We will have a dedicated staff to follow up your every question.',
      team: 'Toaddit Support team',
      mail: 'E-mail: info@toaddit.com',
      method: '-- or contact methods with --'
    },

    school: {
      bags: 'Back to School Bags',
      backpack: 'Backpack',
      lunch: 'Lunch Bag',
      home: 'Home & Decorations',
      blanket: 'Rectangular blanket',
      thermos: 'Thermos',
      shirt: `Children's hooded sweatshirt`,
      create: 'Create your customized gift now!',
      customize: 'Customize Now',
      quantity: 'No minimum order quantity',
      quantityList: 'Customization on demand, efficient and timely order, production to shipment.',
      products: '1500+ available products',
      productsList:
        'All products are in line with current, market trends and demands, aiming, to fulfill as many needs as possible.',
      designs: 'Hot designs available',
      designsList: 'Professional designers team design, according to the market, hot selling elements.',
      team: 'Professional service team',
      teamList: 'Global delivery, logistics arrive, on time, orders have good, after-sales guarantee.',
      contact1: 'You can contact directly through the following',
      contact2: 'contact methods',
      view: 'View More >',
      bagsList: ['Backpack', 'Lunch Bag'],
      homeList: ['Rectangular blanket', 'Thermos']
    },

    christmas: {
      clothing: 'Clothing',
      accessories: 'Accessories',
      footwear: 'Footwear',
      bags: 'Bags',
      home: 'Home & Decorations',
      popular: 'Popular products related to Christmas',
      howCustomise: {
        title: 'How to customise Christmas products',
        list: {
          select: {
            title: 'Select Product Style',
            description: 'Browse the product list and pick the style you want to customise.'
          },
          add: {
            title: 'Add your design',
            description: 'Personalise your product with our free product creator.'
          },
          production: {
            title: 'Production and Logistics',
            description: 'After placing your order, we will manufacture your order and deliver it to your customer!'
          }
        }
      },
      journey: {
        quantity: 'No minimum order quantity',
        quantityList: 'Customization on demand, efficient and timely order, production to shipment.',
        products: '1000+ available products',
        productsList:
          'All products are in line with current market trends and demands, aiming to fulfill as many needs as possible.',
        designs: 'Hot designs available',
        designsList: 'Professional designers team design according to the market hot selling elements.',
        team: 'Professional service team',
        teamList: 'Global delivery, logistics arrive on time, orders have good after-sales guarantee.'
      },
      contact: {
        contact1: 'You can contact directly through the following',
        contact2: 'contact methods'
      }
    },

    valentinesDayCard: {
      best: 'THE BEST CHOICE',
      recommend: 'RECOMMEND FOR YOU',
      clothing: 'THICK CLOTHES',
      home: 'HOME & DECORATIONS',
      others: 'OTHERS'
    },

    aboutUs: {
      oneStep: 'Your One-Stop Platform for Custom Print-on-Demand Products',
      bring: 'Bring your ideas to life with professional digital assets, resources and services',
      find: 'Find the right product for you —>',
      specialize: 'We specialize in footwear, bags, car accessories, home & living and clothing',
      reasonTitle: 'Why do so many sellers trust ToAddit with their printing needs?',
      whyOne: 'A wide range of product categories and a stable supply chain for your production needs',
      whyTw: 'Easy-to-use design tools to create your unique designs',
      whyTr: 'Get the best deals, short production time and stable shipping time in one place',
      handText: 'The most flexible after-sales policy to provide the best solution for you',
      mesText:
        'If you have a clear vision for a product and are confident in its potential, we can work with you to develop a customized design that meets your specific requirements',
      goal: 'With our platform, you can enjoy <span style="font-weight: 600">a seamless</span> and  <span style="font-weight: 600">efficient workflow</span>, freeing up your time and resources to focus on growing your business and achieving your goals.',
      capacity: 'How is the Production Capacity of ToAddit?',
      capacity1:
        '1. <span style="font-weight: 600">In-house production:</span> <span style="color: rgba(5, 0, 56, 0.72)">We have our own large-scale manufacturing factory, which covers an area of</span> over 1 4,000 square meters.',
      capacity2:
        '2. <span style="font-weight: 600">Efficient collaboration: </span> <span style="color: rgba(5, 0, 56, 0.72)">The production department of ToAddit consists of multiple departments, including</span> the printing department, transfer department, production department, quality control department, shipment department , <span style="color: rgba(5, 0, 56, 0.72)">etc. They work together in a coordinated manner to ensure that your orders are properly executed.</span> ',
      capacity3:
        '3. <span style="font-weight: 600">High-quality printers:</span>  <span style="color: rgba(5, 0, 56, 0.72)">With</span> 18 heat transfer machines <span style="color: rgba(5, 0, 56, 0.72)">and</span> 12 UV printers.',
      capacity4:
        '4. <span style="font-weight: 600">Own MES System:</span> <span style="color: rgba(5, 0, 56, 0.72)">The in-house developed MES system coordinates, monitors, and optimizes the manufacturing process to ensure the realization of production plans and improve production effhciency and quality.</span>',
      capacity5: '5. 9 production lines and over 200 workers.'
    },

    howItWorks: {
      shipTittle: "Here's how we ship your Orders",
      design: {
        title: 'Sell Your Design Ideas in Minutes',
        description: 'Design and Sell Your Products Everywhere',
        start: 'Let Us Fulfill Your Orders.'
      },

      steps: {
        title: 'Enjoy ToAddit services in 4 easy steps',
        list: [
          {
            url: '',
            title: 'Choose Your Product',
            description:
              'ToAddit offers over 1500 customizable products including T-shirts, car accessories, bags, home decor, and holiday items. We specialize in footwear and pride ourselves on being a comprehensive supplier.'
          },
          {
            url: '',
            title: 'Design and Sell Your Own Products with Ease',
            description:
              'With free mockup generator that allows you to apply your designs to a product of your choice, you can easily create custom products and add them to your online store.'
          },
          {
            url: '',
            title: 'Automatically Sync Products to Your Store and Streamline Order Management',
            description: `With just a click, you can easily sync your products to your store and start selling. Focus on marketing your products while we handle the rest. When an order is paid, it's automatically imported to our system. We take care of production, packaging, and shipping.`
          },
          {
            url: '',
            title: 'Fast Processing and Shipping for Your Orders',
            description:
              'Once your order is paid, we take care of the rest. Our team processes your order quickly and ships it out as soon as possible. Fast and reliable order fulfillment, ensuring that your customers receive their products in a timely manner.'
          }
        ]
      },

      start: {
        title: 'Ready to Begin Your Journey with ToAddit?',
        btn: 'Get start'
      },

      services: {
        title: 'Drop shipping Services',
        description: 'The easiest way to start your online store'
      },

      orders: {
        title: "Here's how we ship your Orders",
        list: [
          {
            url: '',
            count: '①',
            title: ' Fulfillment',
            info: 'It takes 2-7 business days to produce and fulfill an order.'
          },
          {
            url: '',
            count: '②',
            title: ' Shipping',
            info: 'The average shipping time is 15 business days depending on the delivery destination.'
          },
          {
            url: '',
            count: '③',
            title: ' Delivery',
            info: 'Once fulfilled and shipped, your order will be delivered to your customers.'
          }
        ]
      },

      grow: {
        grow: 'Grow Your Business with ToAddit Today.',
        question: 'Have any questions?',
        contact: 'Contact us'
      },

      definition: {
        title: 'What is drop shipping by definition?',
        description: 'No need to think about inventory or storage, just you and your business.',
        detail:
          'Using our platform services, you can sell products in online stores through product suppliers. ' +
          "Therefore, as the owner, you don't have to worry about inventory or product storage, just send orders on demand."
      },

      store: {
        operate: 'Are you ready to start creating your personal store?',
        btn: 'Choose your product'
      },

      about: {
        title: 'ToAddit',
        list: [
          {
            title: 'About us',
            children: [
              {
                subTitle: 'Privacy Policy'
              },
              {
                subTitle: 'Terms of service'
              }
            ]
          },
          {
            title: 'Support',
            children: [
              {
                subTitle: 'Shipping Method Guide'
              },
              {
                subTitle: 'How it works'
              },
              {
                subTitle: 'Connect your store'
              },
              {
                subTitle: 'Returns'
              }
            ]
          },
          {
            title: 'Contact',
            children: [
              {
                subTitle: 'Email: supportdropship@toaddit.com'
              },
              {
                subTitle: 'Phone: 086+ 177 0609 3305 Alita'
              },
              {
                subTitle: 'Phone: 086+ 183 5910 7600 Amanda'
              }
            ]
          }
        ]
      },

      footer: {
        sm: 'Social Media',
        qcu: 'If you have any questions, please contact us',
        cu: 'Contact Us',

        st: 'Send me tips, trends, freebies, updates & offers.',
        su: 'Sign me up',
        sp: 'Email address',

        list: {
          s: 'Support',
          h: 'Help center',
          c: 'Contact',
          au: 'About Us'
        },
        child: {
          b: 'Blogs',
          at: 'About ToAddit',
          smg: 'Shipping Method Guide',
          rar: 'Return and Refund',
          pp: 'Privacy Policy',
          tos: 'Terms of Service',
          del: 'Description of data deletion',
          lam: 'Leave a message',
          e: 'Email',
          e1: SERVICE_EMAIL,
          p: 'Phone',
          p1: '086+ 177 0609 3305 Alita',
          p2: '086+ 183 5910 7600 Amanda',

          cn: 'Contact Name:',
          cnName: 'DAWEI CHE',
          phone: 'Phone：',
          phone2: '18016709339',
          email: 'Email:',
          email2: 'info@forudesigns.com',
          add: 'ADD:',
          gs: 'Getting Started',
          pad: 'Products and Designs',
          orders: 'Orders',
          shopify: 'Shopify',
          shipping: 'Shipping'
        }
      },

      rights: {
        content: '© ToAddit Inc. All rights reserved.'
      }
    },

    topic: {
      banner: {
        title: 'Customize and sell trendy products online',
        subTitle: 'Partner for your e-commerce solutions',
        startDesigning: 'Start designing',
        howItWorks: 'How it works？',
        shipped: 'Over 1 million items shipped every month',
        sellers: [
          {
            text: 'LAVAL, CA 29min ago'
          },
          {
            text: 'JACKSON, US 11min ago'
          },
          {
            text: 'LAKE WORTH, US 27min ago'
          },
          {
            text: 'CALGARY, CA 24min ago'
          },
          {
            text: 'HAINESPORT, US 55min ago'
          },
          {
            text: 'WESTMINSTER, US 58min ago'
          },
          {
            text: 'VANCOUVER, CA 40min ago'
          },
          {
            text: 'DECATUR, US 32min ago'
          },
          {
            text: 'LOUISVILLE, US 24min ago'
          },
          {
            text: 'DUBLIN, US 21min ago'
          },
          {
            text: 'HOPE, CA 17min ago'
          },
          {
            text: 'BURDETT, US 11min ago'
          },
          {
            text: 'GARNER, US 5min ago'
          },
          {
            text: 'BOTHELL, US 9min ago'
          },
          {
            text: 'OSHAWA, CA 2min ago'
          }
        ],
        profitList: [
          {
            text: '100% Free to Use'
          },
          {
            text: '1500+ Trendy Products'
          },
          {
            text: 'Fresh Products, Always On Demand'
          },
          {
            text: '#1 Global POD Supply: Footwear & Auto Parts'
          },
          {
            text: 'Local Support, Global Reach'
          }
        ]
      },
      create: {
        title: 'Create & Sell your customized products online',
        description:
          'Find the perfect product and turn your design into a reality! Your trusted Print on Demand partner.',
        start: 'Start Selling',
        list: [
          {
            content: '1500+ Products'
          },
          {
            content: 'Fulfillment & Dropshipping'
          },
          {
            content: 'User Friendly Design Tool'
          }
        ],
        itemShip: 'More than 20,000 items are shipped daily',
        timeList: [
          {
            title: 'Agra US',
            content: '3 minutes ago'
          },
          {
            title: 'Cristina US',
            content: '6 minutes ago'
          },
          {
            title: 'Brandy UK',
            content: '1 minutes ago'
          }
        ]
      },

      sell: {
        title: 'Grow Your Business with ToAddit',
        description: 'Fast, simple, affordable.',
        list: [
          {
            title: 'Customized on Demand',
            description: 'Discover a variety of products to suit your needs'
          },
          {
            title: 'Flexible Selling Options',
            description: 'Effortlessly create or sync orders with your store'
          },
          {
            title: 'ToAddit Handle It All',
            description: 'No MOQ, No Risks, No Stock Required, One-Click Delivery'
          }
        ]
      },

      customize: {
        title: 'Endless Possibilities with Our Customizable Product Range',
        list: [
          {
            title: 'Bestsellers'
          },
          {
            title: 'New Arrivals'
          }
        ],
        typesList: [
          {
            type: 'Shoes'
          },
          {
            type: 'Bag'
          },
          {
            type: 'Auto accessories'
          },
          {
            type: 'Clothes'
          },
          {
            type: 'Home & Living'
          },
          {
            type: 'Holiday Specials'
          }
        ]
      },

      products: {
        title: '1500+ trendy products can be customized',
        subTitle:
          'Products have a large profit margin, the quality of the product is guaranteed, you can quickly design and then efficiently on the shelves of the product',
        category: {
          Bags: {
            btn: 'Bags'
          },
          Car: {
            btn: 'Car Accessories'
          },
          AOP: {
            btn: 'AOP Apparel'
          },
          Home: {
            btn: 'Home & Decorations'
          },
          Footwear: {
            btn: 'Footwear'
          },
          Pet: {
            btn: 'Pet Accessories'
          }
        },
        start: 'Start Designing',
        all: 'View all'
      },

      design: {
        title: 'Add your designs to various products',
        description:
          'Effortlessly customize products with our user-friendly design tool. Add your unique designs to shoes, bags, car accessories, clothes, home & living...',
        btn: 'Contact Sales to request a demo'
      },

      marketplace: {
        title: 'Integrate Store & Sync with Platform',
        description: 'More integration options is coming soon',
        EtsyTip: {
          text1: `The term 'Etsy' is a trademark of Etsy, Inc.`,
          text2: `This application uses the Etsy API but is not endorsed or certified by Etsy.`
        }
      },
      merchants: {
        title: 'Trusted by over 50,000 merchants around the world!',
        title2: `Whether you're a fledgling startup or an enterprise-level e-commerce company, we're committed to providing you with high-quality e-commerce solutions.`,
        description:
          "Whether you're just starting out or running an enterprise-level " +
          'e-commerce business, we do everything we can to ensure a positive merchant experience.',
        list: [
          {
            iconCount: 5,
            name: 'Luke Dunphy',
            origin: 'Amazon sellers',
            experience:
              '“Affected by the epidemic, overseas business development has stagnated. Fortunately, ToAddit launched new products in time, which made me catch up with a wave ofcrazes. I hope the platform can always maintain this market sensitivity.”'
          },
          {
            iconCount: 5,
            name: 'Philo Pappas',
            origin: 'Etsy sellers',
            experience:
              '“I have been working with ToAddit since 2019, transitioning from the old platform to this new one. They offer a diverse product catalog to choose from and consistently updates it with new products. Very happy about their services & product quality. l highly recommend ToAddit to everyone."'
          },
          {
            iconCount: 5,
            name: 'Bella Andreas',
            origin: 'Shopify sellers',
            experience: `“I'm just getting started creating my own online business and this app is a great way to test your ideas and get your foot in the door! Especially if you're limited on supplies to start. It's also easy to navigate and create. I'm more than excited to see where it takes me!”`
          }
        ]
      },

      start: {
        title: '0 Inventory · 0 Startup Capital · One piece drop shipping',
        title1: 'Free Design One-Click Generated',
        btn: 'Everything to start & boost yourPOD business in one place'
      },

      lowOrHeighMakeMoney: {
        title: 'Make money with low risk and high profit margins',
        sell: 'You sell a T-shirt at',
        production: 'You pay for production and shipping',
        Profit: 'Your Profit',
        get: 'Get started with ToAddit!',
        Start: 'Start selling',
        leave: 'Leave us a message if you have any questions'
      },

      cookie: {
        cs: 'Cookie settings',
        info: 'This website uses cookies to improve the user experience.By using this website, you agree to the use of <a style="color: #6791FF; font-weight: bold; text-decoration: underline; cursor: pointer" target="_blank" href="https://allaboutcookies.org/">the cookie you selected.</a>',
        understand: 'I understand'
      },

      make: {
        learn: 'Learn more >',
        money: 'How to make money with ToAddit',
        make: [
          {
            title: 'Design products online in just a few minutes',
            content:
              '1500+ product models to choose from.You can easily create unique products with sophisticated design tools to produce trendy products for your brand.'
          },
          {
            title: 'Create orders, import orders or synchronize integrated store orders',
            content:
              'You can place orders directly, import orders, or associate with stores such as Shopify to publish your products to the store, and the order data will be updated and synchronized, making your sales operations a breeze.'
          },
          {
            title: 'Sell products easily and without stock pressure',
            content:
              'No need to worry about the stress caused by product inventory, no minimum order limit, make money without neglecting quality, sell your products and wait for orders to come in.'
          },
          {
            title: 'ToAddit takes care of manufacturing and shipping',
            content:
              'ToAddit will produce quality-assured products for your customers and deliver them to your customers on time, with  global shipping.'
          }
        ],
        help: 'ToAddit is a print-on-demand platform that helps you build a profitable online business',
        take: 'that takes care of production and shipping, helping you focus on sales',
        start: 'Get started >'
      },

      cd: {
        easy: `It's easy to add designs and start customizing your products!`,
        use: 'Use our free design tool to easily add designs to Bags, Clothing, Household Products, Auto Accessories, Pet Products and other categories.',
        selection: 'Design products efficiently and quickly through batch selection',
        start: 'Start designing >'
      },

      different: {
        title: 'What makes ToAddit different?',
        reasonList: [
          {
            icon: 'icon-different1',
            title: 'Products that cater to market trends',
            text: '1500+ trendy products with free customization. Popular categories are constantly updated and the quality of the products is guaranteed.'
          },
          {
            icon: 'icon-different2',
            title: 'No minimum order',
            text: 'No need to stock up, we control the process for you from the production of the product to the mailing of the order.'
          },
          {
            icon: 'icon-different3',
            title: 'Free to use',
            text: 'Paying only for the products and logistics of your order. ToAddit is free to use, with transparent pricing'
          },
          {
            icon: 'icon-different4',
            title: 'Competitive price',
            text: 'The price of our products can be given a discount according to the quantity, so that you have enough profit margin.'
          },
          {
            icon: 'icon-different5',
            title: 'Professional Design Team',
            text: 'If there is no designer to design the product pattern for you, you can contact us to provide you with free design drawings or design proposals.'
          },
          {
            icon: 'icon-different6',
            title: 'Real-time Design Tool',
            text: 'We provide free design tools you can customize the product for free, you can view the customization effect in real time and generate products to synchronize the store.'
          },
          {
            icon: 'icon-different7',
            title: 'Brand Customization',
            text: 'You can add a personalized brand logo to create a strong connection between your brand and your products, to enhance your brand image.'
          },
          {
            icon: 'icon-different8',
            title: 'Fast and convenient global transportation',
            text: 'Our transportation is timely and efficient, and we generally guarantee that the goods will reach your customers on time.'
          }
        ],
        explainList: [
          {
            title: '99%',
            text: 'Customer satisfaction with our products'
          },
          {
            title: '1000,000+',
            text: 'The monthly shipment volume of packages'
          },
          {
            title: '3-5 days',
            text: 'Production completion time'
          },
          {
            title: '1500+',
            text: 'Hot product styles'
          }
        ]
      },

      solution: {
        look: 'Are you looking for an e-commerce solution?',
        send: 'Send us a message and ToAddit will provide you with a solution.',
        leave: 'Leave a message',
        contact: 'You can contact us'
      },

      brand: {
        tag: 'You can add brand tag to your products',
        increase:
          'Add your exclusive brand logo to increase the recognition of your products, strengthen the adhesion between your brand and customers, and improve the recognition of your brand',
        start: 'Get Started >'
      }
    },

    //店铺
    store: {
      Reconnect: 'Reconnect',
      step: {
        first: 'Step 1',
        step1: 'Create your Shopify account',
        second: 'Step 2',
        step2: `Install the <span style="color:#3569FD"><a target="_blank" href="https://apps.shopify.com/toaddit?locale=zh-CN&search_id=283411a8-e174-47d5-a093-99127d27f20e&surface_detail=toaddit&surface_inter_position=1&surface_intra_position=1&surface_type=search">ToAddit app</a></span> on Shopify`,
        third: 'Step 3',
        step3: 'Connect your store',
        four: 'Step 4',
        step4: 'Add your products'
      },
      sku: 'SKU',
      productName: 'Product name',
      code: 'Product code',
      imageName: 'Image name',
      offShelf: 'The product being pulled off the shelves',
      skuNumber: 'please input sku number',
      sta: 'status',
      Esynced: 'Edit',
      delMsgTip:
        'Deleting the store will completely remove the following store data:' +
        '<br/>' +
        '<br/>' +
        'Store product data will be deleted.' +
        '<br/>' +
        'Order data (unassociated, unpaid) will be deleted.' +
        '<br/>' +
        '<br/>' +
        'This operation is irreversible, please proceed with caution.',
      fillpd: 'Please fill in product details',
      vad: 'Variant associated',
      sss: 'short sleeves',
      npt: 'New Product',
      mpt: 'My Product',
      pro: 'Product',
      search: 'search...',
      ptvs: 'Product title,Variants sku',
      cs: 'Color/Size',
      vat: 'Variant',
      tps: 'ToAddit product sku',
      cost: 'Cost,$',
      tp: 'ToAddit price,$',
      rp: 'Retail price,$',
      pit: 'Profit,$',
      pit2: 'Profit,%',
      prd: 'Publish record',
      coc: 'Choose one color ！',
      coz: 'Choose one size ！',
      coi: 'Choose one image ！',
      qsp: 'Query shipping price',
      sp: 'Shipping Price',
      store: 'Store',
      title: 'Title',
      title2: 'title',
      as: 'All Stores',
      us: 'Unsynced',
      dsn: 'Design',
      pre: 'price',
      von: 'View description',
      bnc: 'Bulk Sync',
      unc: 'Unsync',
      tpe: 'ToAddit price',
      pne: 'Product name',
      prt: 'Publish result',
      pushing: 'The product is being published...',
      label: {
        noStoreTip: 'Connect an existing store or create a new one by selecting a platform to sell your products on.',
        connectShopify: 'Connect your Shopify store to ToAddit',
        createPersonStore: 'Create a personal store',
        personStoreDesc:
          'You want to use an ecommerce platform that currently doesn’t integrate with ToAddit, You sell products in person and want to place orders for your customers manually.',
        skuPreTitle: 'SKU Prefix Settings(Option)',
        skuPreSet: 'SKU Prefix Settings:',
        skuPrePlace: 'please enter the SKU prefix',
        skuPreSetTip:
          'If you input a prefix, the format will be:  <span style="color:#3569FD">prefix-style-size</span>. Example: The product style is F51, size is 38, prefix is DayDayup, the corresponding customized SKU would be DayDayupF51-38. If you do not input any data, when you click [Publish], we will keep the original SKU',
        rateTitle: 'Exchange rate settings',
        ratePlace: 'Please enter the exchange rate',
        rateTip:
          'If the exchange rate is set, the final price will be multiplied by the exchange rate and posted on the corresponding store.',
        etsyImgLimit: 'etsy store can choose up to 9 model images per product',
        ords: 'Orders',
        pros: 'Products',
        ped: 'Published',
        us: 'United States',
        sbs: 'Search by size',
        size: 'Size',
        sbc: 'Search by countries or areas',
        cry: 'Countries or Areas',
        ron: 'Region description',
        ren: 'Region',
        sname: 'Store name',
        url: 'Store url',
        proVis: 'Product visibility',
        setSkuNotice:
          'Notice: when setting the retail price, properly refer to the product freight of ToAddit and the collection of VAT on orders.',
        skuset: 'SKU&Price Setting',
        colors: 'Colors',
        create: 'connect or create your online store to start adding products',
        pick: 'Pick one to connect your store',
        connect: 'Connect Store',
        shopify: 'Shopify',
        shopifyDesc: 'Ecommerce platform with everything you need to sell online.',
        etsy: 'Etsy',
        etsyDesc: 'Sell your designed products in one of the global markets for unique and creative products',
        personal: 'Personal ToAddit store',
        personalDesc: 'Create a personal store to manage your other products and orders.',
        storeDetail: 'Details for your store',
        variantsOrMockups: 'Variants & Mockups',
        chooseColors: 'Choose colors:',
        selectALLColors: 'Select all colors',
        selectSize: 'Select size：',
        selectAllSizes: 'Select all sizes',
        chooseMockups: 'Choose mockups',
        mainMoImg: 'Main mockup image',
        titleFirSee: 'Title image is what your customers will see first.',
        skuSetting: 'SKU Setting',
        setSku:
          'Set the product SKU and revenue you want and we will confgure the retail price for you according to your needs',
        proDetails: 'product details',
        title: 'Title:',
        description: 'Description',
        collections: 'Rally:',
        productSeries: 'collections:',
        addSize: 'Add size table to description',
        addEtsySize: 'Add size chart images to product renderings',
        setAll: 'Set All',
        minPriceMsg:
          'The price of some variants is lower than the ToAddit price. You need to set a selling price higher than the ToAddit price to publish.',
        etsySearch: {
          stKeywords: 'Search title keywords',
          svSKU: 'Search for variant SKU, multiple variants separated by commas',
          stSKU: 'Search for ToAddit product SKU, multiple SKU separated by commas'
        },
        ep: 'External Products',
        pp: 'Toaddit Products',
        wp: 'External Products Or Toaddit Products'
      },

      act: {
        addStore: 'Add New Store',
        addPro: 'Add product',
        record: 'Release record',
        blukDel: 'Bulk Delete',
        pin: 'Publish Again',
        quickSynced: 'Quick synced',
        ignoredProducts: 'Ignored products',
        Ignore: 'Ignore',
        Unignore: 'Unignore'
      },
      sync: {
        all: 'ALL',
        syd: 'Synced',
        nod: 'Not Synced',
        psd: 'Partial Synced',
        noe: 'Not Available'
      },
      quickSync: {
        title: 'Quick synced',
        ssp: 'Select the store products (${num})',
        cmp: 'Choose a matching product',
        ms: 'Matching size',
        mcp: 'Matching customized products',
        how: 'How to use it',
        confirm: 'confirm synced',
        back: 'back',
        pro: 'Store products',
        mat: 'Match the size of toAddit product: ${ name }',
        mat1: 'Match the product Template of toAddit product: ${ name }',
        usage: 'Please try to choose store products with the same style and only different images.',
        notFound: `Can't find the product?`,
        design: 'Design a new one',
        return: 'Return to product list',
        res: 'Successfully associated ${ proNum } products, ${ varNum } variants',
        again: 'You can click again to view the instructions for using this function',
        ok: 'OK',
        next: 'next (${ nextNum })',
        next1: 'next',
        associate: 'Association',
        varFailed: '${ varNum } variants failed',
        product: 'Store products',
        size: 'The size of store products',
        assSize: 'Associated Size',
        result: 'Result',
        con: 'Confirm',
        und: 'I understand',
        syncInfo:
          'Usage: Select multiple products in the store(of the same type), batch match your ToAddit design products and sizes',
        detail: 'More details',
        proTitle: 'Product title',
        code: 'Style code',
        sz: 'size',
        pss: 'please select size',
        psp: 'please select product',
        psop: 'please select one product',
        tsp: 'The selected product is a product without variant attributes;Single size',
        name: 'Product name'
      },
      // 忽略弹框
      ignoreBox: {
        dialogOption: {
          title: 'Ignore',
          text: 'Ignore',
          variants: 'variants',
          tp: 'ToAddit Product',
          is: 'Ignore status'
        },
        tab: {
          ip: 'Ignore product',
          iv: 'Ignoring variants'
        },
        productTip1: 'Ignoring the entire product, applicable to non ToAddit producible',
        productTip2: ' products and products from other supplier platforms.',
        biv: 'bulk ignore variants',
        ig: 'Ignore',
        unig: 'Unigore',
        cip: 'Cancel ignoring product',
        cbt: 'Confirm'
      },
      pushStatus: {
        sed: 'Successed',
        png: 'Publishing',
        ush: 'UnPublish',
        fed: 'Failed'
      },
      required: {
        storename: 'Store name is required'
      },
      setting: {
        wth: 'Width',
        lth: 'Length',
        slth: 'Sleeve length',
        inch: 'Inch',
        centimeter: 'Centimeter',
        cors: 'Color/Size',
        si: 'Store info',
        ps: 'Publish settings',
        ss: 'Syncing settings',
        title: 'Settings Stores',
        cs: 'Choose store',
        price: 'Price setting',
        rate: 'Profit rate',
        price_info:
          // eslint-disable-next-line
          "Taking men's T-shirts as an example, here's how changing the profit numbers above will affect your retail prices and profits",
        add_size: 'Add size table to description',
        choose: 'Choose the size guide’s measurement system:',
        status: 'In your store, sync the status of products',
        sizeGuide: 'Size guide description',
        product: 'Product visibility',
        sync_pro: 'Sync all existing products from your store',
        sync_pro_info:
          'If this option is selected, all existing products in your store will be imported into ToAddit as unsynchronized products. If there are a large number of products in your store that need to be fulfilled through ToAddit, you can associate products in store products',
        sync_pro_info_tips:
          'tips：If you have synchronized all products and then cancel this option again, the products and associated data that were originally synchronized from store will be deleted.',
        import: 'Import all unsynced orders',
        import_info:
          'When the option is selected, all new orders in your store will be imported to ToAddit, which may include products not designed by the ToAddit platform.If it is not selected, ToAddit only synchronizes the Toaddit products in the order, and the synchronized order information cannot be updated or modified after the order is synchronized.',
        import_info_tips:
          "tips: In the shop, if one of your products has only some sizes associated with toaddit's products, when the system automatically syncs the order, it will sync all the sizes by default.",
        delivery: 'Delivery settings',
        delivery_1: 'Average fulfillment time 10-20 business days',
        delivery_2: 'Average fulfillment time 5-8 business days',
        track: 'Logistics tracking settings',
        track_info: 'Automatically send logistics tracking information to your store',
        track_info_desc:
          'If this option is selected, once your order status changes to "shipped", the logistics tracking information will be automatically sent.',
        delivery_set: 'Not setting：',
        delivery_set_info:
          'Select this item, and the products that have been removed from ToAddit are still on the shelves in your Shopify store. If the order includes products that have been removed from ToAddit, you need to modify the associated products of the product before you can pay the order',
        delivery_set2: 'Set product inventory as zero',
        delivery_set_info2:
          'If this option is selected, when the product is off the shelf, we will set the inventory of relevant products in your store to zero, and the product will be displayed as "out of stock" in the front of your store.',
        delivery_set3: 'Set the product to draft status in Shopify store',
        delivery_set_info3:
          'If this option is selected, when your product is off the shelf, we will set the status of relevant products in your store to "draft".'
      },
      msg: {
        hngenerated: 'The high-definition image has not been generated yet',
        sud: 'Select Unassociated Data',
        sad: 'Select Associated Data',
        delPro: 'Are you sure you want to delete these products?',
        delProES: 'Confirmation of deletion? Deleting a product will also delete products related to {type}.',
        shopifyConfail: 'There was an issue with your store authorization. Please reconnect your store.',
        authCodeError: 'The authorization code was not found or was already used, Failed to obtain token',
        estyPublishTip:
          'The current currency unit for the store is：{currencyCode}, When synchronizing products, currently only the prices in USD are synchronized. For converting prices into other currencies, Etsy sellers need to handle this manually in the backend',
        chooseOneImg: 'At least one image of each product model must be selected'
      },
      ignoreMsg: {
        oddNumber: {
          title: 'Are you sure to ignore the product',
          message:
            'This option will completely ignore the selected \n products, and the product in the order will be ignored \n when synchronizing the order.'
        },
        plural: {
          title: 'Are you sure to ignore these  product',
          message:
            'This option will completely ignore the selected \n products, and these product in the order will be ignored \n when synchronizing the order.'
        },
        buttonText: 'Confirm'
      },
      status: {
        active: 'Active',
        drafted: 'Drafted',
        synced: 'Synced',
        nsd: 'Not synced',
        ignored: 'Ignored',
        tphbi: 'The product has been Ignored',
        syncTip: 'Synced: The number of variants associated with toaddit custom products',
        notSyncTip: 'Not synced: Number of variants of unassociated toaddit custom products'
      },
      dic: {
        ial: 'Imperial',
        mic: 'Metric'
      },

      syncPro: {
        etsy: {
          qty: 'Quantity',
          category: 'Category',
          syncCategory: 'Synchronous Categorization',
          syncSPId: 'Synchronous delivery options',
          placeCategory: 'Please select your category',
          tags: 'Tags (Up to 13 labels separated by commas,no more than 20 characters per tag.）',
          tagsCase: 'Shapre，color，style，function，etc.',
          deliveryOpts: 'Delivery options',
          placeDeliveryOpts: 'Please select Delivery options',
          deliveryOptsTip1: 'China: Free shiping',
          deliveryOptsTip2: 'Worldwide: Free shipping',
          deliveryOptsTip3: '*You can change it at any time on Etsy.',
          bind: 'Bind Etsy Store',
          bindSucc: 'Successfully authorized binding of Etsy store'
        }
      }
    },

    shopify: {
      cot: 'Connect your store with ToAddit',
      cra: 'Create a new ToAddit account',
      coa: 'Confirm your email address and create a new ToAddit account',
      byp: 'By clicking Sign up you agree to ToAddit Term of Service and Privacy Policy',
      cac: 'Connect a new ToAddit account',
      sia: 'Sign in and connect with an existing ToAddit account'
    },

    etsy: {
      sm: 'The term "Etsy" is a trademark of Etsy, Inc. This application uses the Etsy API but is not endorsed or certified by Etsy, Inc.',
      auth: 'Authorize esty store application with the application name ToAdditDO'
    },

    export: {
      export: 'Export',
      failed: 'Export failed',
      title: 'Export records',
      alert: 'Please note that the exported records are only kept for 30 days, please download the file asap.',
      down: 'Download ',
      proceeding: 'Proceeding...',
      t: {
        code: 'Code',
        tof: 'Types of files',
        et: 'Export time',
        edt: 'Last exported time',
        q: 'Quantity',
        e: 'Exporting',
        c: 'Completed',
        le: 'Last exported',
        menu: 'Process'
      }
    },

    // $t('page.consult.')
    consult: {
      title: 'Help Services',
      t1: 'If you encounter any problems or difficulties while using this platform, you can contact us in a timely manner for help and advice!',
      t2: 'We will have dedicated personnel to follow up on every issue you have.',
      user: {
        title: 'Toaddit Help',
        t1: 'You can contact directly through the following contact methods:'
      }
    },

    allWorkOrders: {
      leaveMessage: 'Leave a message',
      myMessage: 'My Message',
      back: 'back',
      send: 'Send',
      number: 'Number',
      reason: 'Reason for contact',
      comment: 'Comment/Question',
      submissionTime: 'Submission time',
      ci: 'Contact Information'
    },

    ValentinesDay: {
      banner: {
        t1: 'CONTACT FOR DISCOUNT',
        t2: 'EXPERIENCE UPGRADE',
        t3: 'VARIETY OF STYLES'
      },
      shirt: {
        t1: 'USA-Made Cotton T-Shirt',
        t3: 'Free Shipping',
        t4: 'Printed T-shirts',
        t5: 'front and back panels',
        t6: 'SHOP NOW'
      },
      wallet: {
        t1: 'Long PU Wallet with Strap',
        t2: 'Women underpants',
        t3: 'Comfortable Lingerie'
      },
      draw: {
        t1: 'JUST IN TIME',
        t2: 'DRAW ALL EYES ON YOU'
      },
      step: {
        one: {
          t1: 'Select Product Style',
          t2: 'Browse the product list and pick the style you want to customise.'
        },
        two: {
          t1: 'Add your design',
          t2: 'Personalise your product with our free product creator.'
        },
        three: {
          t1: 'Production and Logistics',
          t2: 'After placing your order, we will manufacture your order and deliver it to your customer!'
        }
      }
    },

    mothersDay: {
      tShirt: `Womens Long sleeve T-shirt`,
      sleevedTShirt: `Women's long-sleeved T-shirt`,
      slippers: 'Cotton Slippers',
      fabric: 'soft, comfy flannel fleece fabric',
      wallet: 'PU lanyard wallet (metal zipper)',
      zipper: 'All-match clutch bag, Metal zipper',
      mouth: 'Rounded mouth, Customizable',
      shop: 'Shop now >',
      category: {
        wc: `WOMEN'S CLOTHING`,
        fw: 'FOOTWEAR',
        bags: 'BAGS',
        home: 'HOME & DECORATIONS',
        showALL: 'SHOW ALL'
      },
      title: {
        clothing: `women's clothing`,
        footer: 'Footwear',
        bags: 'Bags',
        home: 'Home & Decorations'
      },
      showMore: 'Show More',
      mjl: `Mason Jar Light`,
      lfsb: 'Love Flower Shadow Box',
      bl: 'Bottle Lamp',
      tumbler: '40oz Tumbler With Straw',
      lcl: 'LED Candle Light',
      tip: 'Please contact our sales support for more information!'
    },
    fathersDay: {
      category:{
        clothing: 'Clothing',
        footwear: 'Footwear',
        home: 'Home & Decorations',
        car: 'Car Accessories',
        other: 'Other Recommendations'
      },
      howCustomise:{
        title: `How to customise Father's Day products`,
        t1: 'select Product Style',
        t2: 'Add your design',
        t3: 'Production and Logistics',
        description1: 'Browse the product list and pick the style you want to customise.',
        description2: 'Personalise your product with our free product creator.',
        description3: 'After placing your order, we will manufactureyour order and deliver it to your customer!'
      },
      specialTitle: 'Special Recommendations',
      productTitle: `Popular products related to Father's Day`,
      viewMore: 'View More >',
      journey:{
        title1: 'No minimum order quantity',
        title2: '1000+ available products',
        title3: 'Hot designs available',
        title4: 'Professional service team',
        content1: 'Customization on demand,efficient and timely orderproduction to shipment.',
        content2: 'All products are in line with currentmarket trends and demands,aimingto fulfill as many needs as possible.',
        content3: 'Professional designers team design according to the market hot selling elements.',
        content4: 'Global delivery, logistics arriveon time, orders have goodafter-sales guarantee.',
      },
      contact1: 'You can contact directly through the following',
      contact2: 'contact methods'
    },
    summerDay:{
      howCustomise:{
        title: `How to customise products`,
        t1: 'Select Product Style',
        t2: 'Add your design',
        t3: 'Production and Logistics',
        description1: 'Browse the product list and pick the style you want to customise.',
        description2: 'Personalise your product with our free product creator.',
        description3: 'After placing your order, we will manufacture your order and deliver it to your customer!'
      },
      product:{
        title: 'Popular products related to Summer',
        beach: 'Summer Beach',
        car: 'Car Accessories',
        footer: 'Footwear',
        viewMore: 'View More >'
      },
      advantage:{
        title1: 'No minimum order quantity',
        title2: '1000+ available products',
        title3: 'Hot designs available',
        title4: 'Professional service team',
        content1: 'Customization on demand, efficient and timely order production to shipment.',
        content2: 'All products are in line with current market trends and demands, aiming to fulfill as many needs as possible.',
        content3: 'Professional designers team design according to the market hot selling elements.',
        content4: 'Global delivery, logistics arrive on time, orders have good after-sales guarantee.'
      },
      contact1: 'You can contact directly through the following',
      contact2: 'contact methods'
    },

    BackToSchool:{
      howCustomise:{
        title: `How to customise products`,
        t1: 'Select Product Style',
        t2: 'Add your design',
        t3: 'Production and Logistics',
        description1: 'Browse the product list and pick the style you want to customise.',
        description2: 'Personalise your product with our free product creator.',
        description3: 'After placing your order, we will manufacture your order and deliver it to your customer!'
      },
      category: {
        bags: 'Bags',
        fw: 'Footwear',
        kc: 'Kids Clothing',
        hd: 'Home & Decorations',
      },
    }
  },
  // 菜单
  menu: {
    allProducts: 'All Products',
    categories: 'Categories',
    Bestsellers: 'Bestsellers',
    NewArrives: 'New Arrives',
    myFavorites: 'My Favorites',
    howItWorks: 'How it works',
    integrations: 'Integrations',
    shopify: 'Shopify',
    helpCenter: 'Help Center',

    productTemplates: 'Product Templates',
    printFiles: 'Print Files',
    orders: 'Orders',
    stores: 'Stores',
    billing: 'Billing',
    billingRecord: 'Billing Record',
    Payments: 'Payments',
    EUAndUKVAT: 'EU and UK VAT',
    settings: 'Settings',
    account: 'Account',
    store: 'Convenient store',
    address: 'Address',
    settingsStore: 'Store',
    settingsAddress: 'Address',
    exportRecords: 'Export records',

    homePage: 'Home page',
    allProduct: 'All product',
    lawCompliance: 'Legal and Compliance',
    aboutUs: 'aboutUs',
    custom: 'Custom item',
    combination: 'Combination products',

    batchDesignContainer: 'Batch design',
    summer: 'Summer',
    school: 'BACK-TO-SCHOOL',
    christmas: 'Christmas',
    ValentinesDay: `Valentine's Day`,
    MothersDay: `Mother's Day`,
    FathersDay: `Father's Day`,
    toAdditPremium: 'ToAddit Premium',
    summerDay: 'Summer',
    BackToSchool: 'Back to School'
  }
}
