// 正式环境(true)  or   测试环境(false)
let env = false;
//
let baseUrl = {
	$_edu: env ?"https://edu.rightknights.com/":"https://edu-test.rightknights.com/",
	$_home: env ?"https://www.rightknights.com/":"https://index-test.rightknights.com/",
	$_check: env ?"https://check.rightknights.com/":"https://check-test.rightknights.com/",
	$_copy: env ?"https://copy.rightknights.com/":"https://copy-test.rightknights.com/",
	$_help: env ?"https://help.rightknights.com/":"https://help-test.rightknights.com/",
	$_ip: env ?"https://ip.rightknights.com/":"https://ip-test.rightknights.com/",
	$_space: env ?"https://space.rightknights.com/":"https://space-test.rightknights.com/",
	$_us: env ?"https://us.rightknights.com/":"https://us-test.rightknights.com/",
	$_router: env ?"https://www2.rightknights.com/":"https://test-hej.rightknights.com/",
	$_pay: env ?"https://pay.rightknights.com/":"https://pay-test.rightknights.com/",
	$_mobile:env?"https://mobile.rightknights.com":"https://mobile-test.rightknights.com",
	$_domain_home: env?"www.rightknights.com":"index-test.rightknights.com"
}
export default baseUrl